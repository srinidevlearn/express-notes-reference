<template><div><div class="custom-container tip">
<p class="custom-container-title">Tips</p>
<p>Mongo Database Collection Operation are seen below</p>
</div>
<h2 id="insert-create" tabindex="-1"><a class="header-anchor" href="#insert-create" aria-hidden="true">#</a> Insert/Create</h2>
<h3 id="insertone" tabindex="-1"><a class="header-anchor" href="#insertone" aria-hidden="true">#</a> InsertOne</h3>
<p><img src="@source/docoperation/img/crud-mongodb-insertOne.svg" alt="An image"></p>
<h3 id="insertmany" tabindex="-1"><a class="header-anchor" href="#insertmany" aria-hidden="true">#</a> InsertMany</h3>
<p><img src="@source/docoperation/img/crud-mongodb-insertMany.svg" alt="An image"></p>
<details class="custom-container details"><summary>Try</summary>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>db.test5.insertOne<span class="token punctuation">(</span><span class="token punctuation">{</span>testString:<span class="token string">'HelloWorld'</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>db.test5.insertMany<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">{</span>testString:<span class="token string">'HelloWorld'</span><span class="token punctuation">}</span>,<span class="token punctuation">{</span>testStr:<span class="token string">'H2'</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></details>
<h2 id="read-find" tabindex="-1"><a class="header-anchor" href="#read-find" aria-hidden="true">#</a> Read/Find</h2>
<p><img src="@source/docoperation/img/crud-mongodb-find.svg" alt="An image"></p>
<div class="custom-container tip">
<p class="custom-container-title">Tips</p>
<p>???? <strong>Cursor</strong> - find method will return a <a href="https://en.wikipedia.org/wiki/Pointer_(computer_programming)" target="_blank" rel="noopener noreferrer"><strong>pointer</strong><ExternalLinkIcon/></a> which will points to the document of collection,this pointer is known as cursor</p>
</div>
<details class="custom-container details"><summary>Try</summary>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>db.test5.find<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></details>
<h2 id="update-modify" tabindex="-1"><a class="header-anchor" href="#update-modify" aria-hidden="true">#</a> Update/Modify</h2>
<h3 id="updatemany" tabindex="-1"><a class="header-anchor" href="#updatemany" aria-hidden="true">#</a> updateMany</h3>
<p><img src="@source/docoperation/img/crud-mongodb-updateMany.svg" alt="An image"></p>
<h3 id="updateone" tabindex="-1"><a class="header-anchor" href="#updateone" aria-hidden="true">#</a> updateOne</h3>
<ul>
<li>for updateOne, first matched record from document get's updated</li>
</ul>
<h3 id="replaceone" tabindex="-1"><a class="header-anchor" href="#replaceone" aria-hidden="true">#</a> replaceOne</h3>
<ul>
<li>for replaceOne, find the first matching document and replace the entire document with new data supplied, whereas id is preserved</li>
</ul>
<details class="custom-container details"><summary>Try</summary>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>db.test5.updateOne<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">'id'</span>:4<span class="token punctuation">}</span>,<span class="token punctuation">{</span><span class="token variable">$set</span>:<span class="token punctuation">{</span><span class="token string">'name'</span><span class="token builtin class-name">:</span><span class="token string">'Sangeet'</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>db.test5.updateMany<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">'id'</span>:<span class="token punctuation">{</span><span class="token variable">$gt</span>:3,<span class="token variable">$lt</span>:5<span class="token punctuation">}</span><span class="token punctuation">}</span>,<span class="token punctuation">{</span><span class="token variable">$set</span>:<span class="token punctuation">{</span><span class="token string">'name'</span><span class="token builtin class-name">:</span><span class="token string">'Srinivasagaru'</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>db.test5.replaceOne<span class="token punctuation">(</span><span class="token punctuation">{</span>
_id: ObjectId<span class="token punctuation">(</span><span class="token string">"62e810fb0a888652437cada5"</span><span class="token punctuation">)</span><span class="token punctuation">}</span>,
<span class="token punctuation">{</span>
    id: <span class="token number">4</span>,
    name: <span class="token string">'OConner'</span>,
    username: <span class="token string">'Karianne'</span>,
    email: <span class="token string">'Julianne.OConner@kory.org'</span>,
    address: <span class="token punctuation">{</span>
        street: <span class="token string">'Hoeger Mall'</span>,
        suite: <span class="token string">'Apt. 692'</span>,
        city: <span class="token string">'South Elvis'</span>,
        zipcode: <span class="token string">'53919-4257'</span>,
        geo: <span class="token punctuation">{</span> lat: <span class="token string">'29.4572'</span>, lng: <span class="token string">'-164.2990'</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>,
    phone: <span class="token string">'493-170-9623 x156'</span>,
    website: <span class="token string">'kale.biz'</span>,
    company: <span class="token punctuation">{</span>
        name: <span class="token string">'Robel-Corkery'</span>,
        catchPhrase: <span class="token string">'Multi-tiered zero tolerance productivity'</span>,
        bs: <span class="token string">'transition cutting-edge web services'</span>
      <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<h2 id="delete-remove" tabindex="-1"><a class="header-anchor" href="#delete-remove" aria-hidden="true">#</a> Delete/Remove</h2>
<h3 id="deletemany" tabindex="-1"><a class="header-anchor" href="#deletemany" aria-hidden="true">#</a> deleteMany</h3>
<p><img src="@source/docoperation/img/crud-mongodb-deleteMany.svg" alt="An image"></p>
<h3 id="deleteone" tabindex="-1"><a class="header-anchor" href="#deleteone" aria-hidden="true">#</a> deleteOne</h3>
<ul>
<li>for deleteOne, first matched record from document get's deleted</li>
</ul>
<details class="custom-container details"><summary>Try</summary>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>db.test5.deleteOne<span class="token punctuation">(</span><span class="token punctuation">{</span>id:7<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>db.test5.deleteMany<span class="token punctuation">(</span><span class="token punctuation">{</span>testString:<span class="token string">'Hello World'</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></details>
<h2 id="bulkwrite" tabindex="-1"><a class="header-anchor" href="#bulkwrite" aria-hidden="true">#</a> bulkWrite</h2>
<details class="custom-container details"><summary>try on VSCODE Playground</summary>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> database <span class="token operator">=</span> <span class="token string">'testimports'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> collection <span class="token operator">=</span> <span class="token string">'testbulkwrite'</span><span class="token punctuation">;</span>

<span class="token comment">// The current database to use.</span>
<span class="token function">use</span><span class="token punctuation">(</span>database<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Create a new collection.</span>
db<span class="token punctuation">.</span><span class="token function">createCollection</span><span class="token punctuation">(</span>collection<span class="token punctuation">)</span><span class="token punctuation">;</span>

db<span class="token punctuation">.</span><span class="token function">getCollection</span><span class="token punctuation">(</span>collection<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">insertMany</span><span class="token punctuation">(</span> <span class="token punctuation">[</span>
   <span class="token punctuation">{</span> <span class="token literal-property property">_id</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"pepperoni"</span><span class="token punctuation">,</span> <span class="token literal-property property">size</span><span class="token operator">:</span> <span class="token string">"small"</span><span class="token punctuation">,</span> <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token number">4</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token punctuation">{</span> <span class="token literal-property property">_id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"cheese"</span><span class="token punctuation">,</span> <span class="token literal-property property">size</span><span class="token operator">:</span> <span class="token string">"medium"</span><span class="token punctuation">,</span> <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token number">7</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token punctuation">{</span> <span class="token literal-property property">_id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"vegan"</span><span class="token punctuation">,</span> <span class="token literal-property property">size</span><span class="token operator">:</span> <span class="token string">"large"</span><span class="token punctuation">,</span> <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token number">8</span> <span class="token punctuation">}</span>
<span class="token punctuation">]</span> <span class="token punctuation">)</span>

db<span class="token punctuation">.</span><span class="token function">getCollection</span><span class="token punctuation">(</span>collection<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">bulkWrite</span><span class="token punctuation">(</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">insertOne</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">document</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">_id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"beef"</span><span class="token punctuation">,</span> <span class="token literal-property property">size</span><span class="token operator">:</span> <span class="token string">"medium"</span><span class="token punctuation">,</span> <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token number">6</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">insertOne</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">document</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">_id</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"sausage"</span><span class="token punctuation">,</span> <span class="token literal-property property">size</span><span class="token operator">:</span> <span class="token string">"large"</span><span class="token punctuation">,</span> <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token number">10</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">updateOne</span><span class="token operator">:</span> <span class="token punctuation">{</span>
         <span class="token literal-property property">filter</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"cheese"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
         <span class="token literal-property property">update</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">$set</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token number">8</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>
      <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">deleteOne</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">filter</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"pepperoni"</span><span class="token punctuation">}</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">replaceOne</span><span class="token operator">:</span> <span class="token punctuation">{</span>
         <span class="token literal-property property">filter</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"vegan"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
         <span class="token literal-property property">replacement</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"tofu"</span><span class="token punctuation">,</span> <span class="token literal-property property">size</span><span class="token operator">:</span> <span class="token string">"small"</span><span class="token punctuation">,</span> <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token number">4</span> <span class="token punctuation">}</span>
      <span class="token punctuation">}</span> <span class="token punctuation">}</span>
<span class="token punctuation">]</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>

db<span class="token punctuation">.</span><span class="token function">getCollection</span><span class="token punctuation">(</span>collection<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
</div></template>


