<template><div><h2 id="installing" tabindex="-1"><a class="header-anchor" href="#installing" aria-hidden="true">#</a> Installing</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token operator">></span> <span class="token function">node</span> <span class="token parameter variable">-v</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>check for node version if you can see version number, you can proceed further</li>
<li>else you need to install node first and follow this setup guideline.</li>
<li>Create a directory to hold your application, and make that your working dCreate Directory</li>
</ul>
<h2 id="create-directory" tabindex="-1"><a class="header-anchor" href="#create-directory" aria-hidden="true">#</a> Create Directory</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token operator">></span> <span class="token function">mkdir</span> <span class="token operator">&lt;</span>app_name<span class="token operator">></span>
<span class="token operator">></span> <span class="token builtin class-name">cd</span> <span class="token operator">&lt;</span>app-name<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="npm-init" tabindex="-1"><a class="header-anchor" href="#npm-init" aria-hidden="true">#</a> Npm Init</h2>
<ul>
<li>Use the npm init command to create a package.json file for your application</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token operator">></span> <span class="token function">npm</span> init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="install-express" tabindex="-1"><a class="header-anchor" href="#install-express" aria-hidden="true">#</a> Install Express</h2>
<ul>
<li>Now install Express in the myapp directory and save it in the dependencies list.</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token operator">></span> <span class="token function">npm</span> <span class="token function">install</span> express
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>


