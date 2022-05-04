<template>
  <div>
    <!-- 一级描述 -->
    <p>
      FIT2CLOUD UI 是基于Element
      UI二次开发的Vue组件库，提供企业软件开发时常用的组件，过滤器，指令等
    </p>
       <!-- 内容 -->
    <div class="component-block">
      <h2>安装</h2>
      <p>推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。</p>
      <code-example label="Shell" lang="shell">
        npm install fit2cloud-ui
      </code-example>
      <p>使用时需要安装Element UI</p>
      <code-example label="Shell" lang="shell">
        npm install element-ui
      </code-example>
      <p>因为需要使用scss，所以需要安装sass，(sass-loader要求11以下)</p>
      <code-example label="Shell" lang="shell">
        npm install -D sass sass-loader
      </code-example>
      <h2>完整引入</h2>
      <p>在 main.js 中写入以下内容：</p>
      <code-example>
        {{fullBundle}}
      </code-example>
      <h2>按需引入</h2>
      <p>借助 babel-plugin-import，我们可以只引入需要的组件，以达到减小项目体积的目的。</p>
      <p>首先，安装 babel-plugin-component：</p>
      <code-example label="Shell" lang="shell">
        npm install babel-plugin-import -D
      </code-example>
      <p>然后，在 babel.config.js 中写入以下内容：</p>
      <p>⚠️ 注意：如果改为完整引入，请把这部分还原。</p>
      <code-example>
        {{babelConfig}}
      </code-example>
      <p>接下来，就可以引入部分组件，比如 SearchBar 和 Table，那么需要在 main.js 中写入以下内容：</p>
      <code-example>
        {{demandIntro}}
      </code-example>
      <h2>国际化</h2>
      <p>使用vue-i18n</p>
      <code-example>
        {{vueI18n}}
      </code-example>
      <h2>Icon</h2>
      <p>图标类全部支持iconfont，按照iconfont的class规则正常引入即可。引入后使用方式如下：</p>
      <code-example label="Shell" lang="shell">
       {{icon}}
      </code-example>
    </div>

  </div>
</template>

<script lang="ts">
export default {
  name: "GettingStartedDoc",
}
</script>

<style lang="scss" scoped>
.component-block {
  margin-top: 40px;

  p {
    font-size: 14px;
    color: #5e6d82;
    line-height: 1.5em;
  }

  h2 {
    font-weight: 400;
    color: #1f2f3d;
  }
}
</style>
