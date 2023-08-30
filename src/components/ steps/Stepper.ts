import {useLocale} from '@/hooks';

const {t} = useLocale();
import {StepperOptions, StepOptions} from './types';

export class Stepper implements StepperOptions {
  steps: [Step];
  index: number;
  activeSet: any;
  isLoading: boolean;
  onCancelButtonText: string;
  onFinishButtonText: string;
  prevButtonText: string;
  nextButtonText: string;
  buttonSize: string;
  footerAlign: string;
  showCancel: any;
  beforeActive: Function;
  beforeLeave: Function;
  height: string;

  constructor(options?: StepperOptions) {
    options = options || ({} as StepperOptions);
    // 所有步骤节点(Step对象数组)
    this.steps = options.steps;
    // 正在执行的节点的索引
    this.index = options.index === undefined ? 0 : options.index;
    // 激活过的节点的索引
    this.activeSet = new Set();
    // loading状态
    this.isLoading = options?.isLoading || false;
    // footer 属性
    this.onCancelButtonText = options.onCancelButtonText || t('fu.steps.cancel');
    this.onFinishButtonText = options.onFinishButtonText || t('fu.steps.finish');
    this.prevButtonText = options.prevButtonText || t('fu.steps.prev');
    this.nextButtonText = options.nextButtonText || t('fu.steps.next');
    this.buttonSize = options.buttonSize || 'default';
    this.footerAlign = options.footerAlign || 'flex';
    // 是否显示取消按钮
    this.showCancel = options.showCancel === undefined ? false : options.showCancel;
    // 激活前钩子
    this.beforeActive = options.beforeActive;
    // 离开前钩子
    this.beforeLeave = options.beforeLeave;
    // 高度
    this.height = options.height;
  }

  // index是否为第一个节点
  isFirst(index: number): boolean {
    return index === 0;
  }

  // index是否为最后一个节点
  isLast(index: number): boolean {
    return index === this.steps.length - 1;
  }

  // index的节点是否激活过
  isActive(index: number): boolean {
    return this.activeSet.has(index);
  }

  // index的节点是否为正在激活的节点
  isCurrent(index: number): boolean {
    return this.index === index;
  }

  // 激活
  async active(index: number) {
    // 在节点范围内，并且不等于当前节点
    const isValid: boolean = index >= 0 && index < this.steps.length && this.index !== index;
    const forward: boolean = index > this.index;
    if (isValid) {
      // 离开前钩子返回false，则不执行激活
      if (await (this.executeBeforeLeave(this.index, forward)) !== false) {
        // 激活前钩子返回false，则不执行激活
        if (await (this.executeBeforeActive(index, forward)) !== false) {
          // 激活
          this.index = index;
          this.activeSet.add(index);
        }
      }
    }
  }

  // 反激活
  // inactive(index: number): void {
  //   this.activeSet.delete(index);
  // }

  // 下一步
  next(): void {
    if (!this.isLast(this.index)) {
      this.active(this.index + 1);
    }
  }

  // 上一步
  prev(): void {
    if (!this.isFirst(this.index)) {
      this.active(this.index - 1);
    }
  }

  // 使用索引获取Step对象
  getStep(index: number): Step | undefined {
    if (this.steps && this.steps.length > index) {
      return this.steps[index];
    }
  }

  // 使用ID获取节点索引
  // getIndex(id: string): number {
  //   if (this.steps) {
  //     for (let i = 0; i < this.steps.length; i++) {
  //       let step: any = this.steps[i];
  //       if (id === step.id) {
  //         return i;
  //       }
  //     }
  //   }
  //   return -1;
  // }

  executeBeforeLeave(index: number, forward: boolean) {
    const step: any = this.getStep(index);
    if (step.beforeLeave) {
      return step.beforeLeave(step, forward);
    }
    if (this.beforeLeave) {
      return this.beforeLeave(step, forward);
    }
  }

  executeBeforeActive(index: number, forward: boolean) {
    const step: any = this.getStep(index);
    if (step.beforeActive) {
      return step.beforeActive(step, forward);
    }
    if (this.beforeActive) {
      return this.beforeActive(step, forward);
    }
  }
}

export class Step implements StepOptions {
  id?: string;
  index: number;
  beforeActive?: Function;
  beforeLeave?: Function;
  title?: string;
  description?: string;
  icon?: string;
  status?: string;

  constructor(options?: StepOptions) {
    options = options || ({} as StepOptions);
    this.id = options.id;
    this.index = options.index;
    // 激活前钩子
    this.beforeActive = options.beforeActive;
    // 离开前钩子
    this.beforeLeave = options.beforeLeave;
    // el-step 属性
    this.title = options.title;
    this.description = options.description;
    this.icon = options.icon;
    this.status = options.status;
  }
}
