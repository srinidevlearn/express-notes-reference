<template><div><p>How to Route incoming request inside express app?</p>
<ul>
<li>Routing refers to determining how an application responds to a client request to a particular endpoint.
<ul>
<li>It must have URI (or path).</li>
<li>It must have HTTP request method (GET, POST, and so on).</li>
</ul>
</li>
<li>Each route can have one or more handler functions, which are executed when the route is matched.</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token constant">METHOD</span><span class="token punctuation">(</span><span class="token constant">PATH</span><span class="token punctuation">,</span> <span class="token constant">HANDLER</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>Where:</p>
<blockquote>
<ul>
<li><strong>app</strong> is an instance of express.</li>
<li><strong>METHOD</strong> is an HTTP request method, in lowercase.</li>
<li><strong>PATH</strong> is a path on the server.</li>
<li><strong>HANDLER</strong> is the function executed when the route is matched.</li>
</ul>
</blockquote>
</blockquote>
<StackBlitz id="express-simple-q77h7t"/></div></template>


