<template><div><div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>Mongo Database Collection Operation are seen below</p>
</div>
<nav class="table-of-contents"><ul><li><router-link to="#insert-create">Insert/Create</router-link><ul><li><router-link to="#insertone">InsertOne</router-link></li><li><router-link to="#insertmany">InsertMany</router-link></li></ul></li><li><router-link to="#read-find">Read/Find</router-link></li><li><router-link to="#update-modify">Update/Modify</router-link><ul><li><router-link to="#updatemany">updateMany</router-link></li><li><router-link to="#updateone">updateOne</router-link></li><li><router-link to="#replaceone">replaceOne</router-link></li></ul></li><li><router-link to="#delete-remove">Delete/Remove</router-link><ul><li><router-link to="#deletemany">deleteMany</router-link></li><li><router-link to="#deleteone">deleteOne</router-link></li></ul></li></ul></nav>
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
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
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
</div></template>


