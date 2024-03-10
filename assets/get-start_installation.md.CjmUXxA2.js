import{_ as s,c as a,o as i,V as e}from"./chunks/framework.DVGDG1kt.js";const g=JSON.parse('{"title":"Instalación","description":"","frontmatter":{},"headers":[],"relativePath":"get-start/installation.md","filePath":"get-start/installation.md"}'),t={name:"get-start/installation.md"},n=e(`<h1 id="instalacion" tabindex="-1">Instalación <a class="header-anchor" href="#instalacion" aria-label="Permalink to &quot;Instalación&quot;">​</a></h1><div class="info custom-block"><p class="custom-block-title">INFO</p><p>La fuente original (en ingles) de este tutorial se encuentra <a href="https://tanstack.com/query/latest/docs/framework/vue/installation" target="_blank" rel="noreferrer">aquí</a></p></div><p>Puede instalar Vue Query a través de <a href="https://www.npmjs.com/" target="_blank" rel="noreferrer">NPM</a>.</p><blockquote><p><em>&quot;v5 está actualmente disponible como candidato a lanzamiento. No anticipamos ningún cambio importante en la API de ahora en adelante. Le recomendamos que lo pruebe e informe cualquier problema que encuentre.&quot;</em></p></blockquote><h2 id="npm" tabindex="-1">NPM <a class="header-anchor" href="#npm" aria-label="Permalink to &quot;NPM&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npm i @tanstack/vue-query</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># or</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pnpm add @tanstack/vue-query</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># or</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> yarn add @tanstack/vue-query</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># or</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bun add @tanstack/vue-query</span></span></code></pre></div><blockquote><p><em>&quot;¿Quieres probarlo antes de descargarlo? ¡Prueba el ejemplo <a href="https://tanstack.com/query/latest/docs/framework/vue/examples/basic" target="_blank" rel="noreferrer">básico</a>!&quot;</em></p></blockquote><p>Vue Query es compatible con Vue 2.x y 3.x</p><blockquote><p><em>&quot;Si está utilizando Vue 2.6, asegúrese de configurar también <a href="https://github.com/vuejs/composition-api" target="_blank" rel="noreferrer">@vue/composition-api</a>&quot;</em></p></blockquote><h2 id="inicializacion-vue-query" tabindex="-1">Inicialización Vue Query <a class="header-anchor" href="#inicializacion-vue-query" aria-label="Permalink to &quot;Inicialización Vue Query&quot;">​</a></h2><p>Antes de usar Vue Query, debe inicializarlo usando <code>VueQueryPlugin</code></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { VueQueryPlugin } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@tanstack/vue-query&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">app.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">use</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(VueQueryPlugin)</span></span></code></pre></div><h2 id="uso-de-la-composition-api-con-script-setup" tabindex="-1">Uso de la <em>Composition API</em> con <code>&lt;script setup&gt;</code> <a class="header-anchor" href="#uso-de-la-composition-api-con-script-setup" aria-label="Permalink to &quot;Uso de la _Composition API_ con \`&lt;script setup&gt;\`&quot;">​</a></h2><p>Todos los ejemplos de nuestra documentación utilizan la sintaxis <code>&lt;script setup&gt;</code>.</p><p>Los usuarios de Vue 2 también pueden usar esa sintaxis usando <a href="https://github.com/antfu/unplugin-vue2-script-setup" target="_blank" rel="noreferrer">este complemento</a>. Consulte la documentación del complemento para obtener detalles de instalación.</p><p>Si no es fanático de la sintaxis <code>&lt;script setup&gt;</code>, puede traducir fácilmente todos los ejemplos a la sintaxis normal de la <em>Composition API</em> moviendo el código bajo la función <code>setup()</code> y devolviendo los valores utilizados en la plantilla.</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { useQuery } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@tanstack/vue-query&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">isPending</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">isFetching</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">isError</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">error</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> useQuery</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  queryKey: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;todos&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  queryFn: getTodos,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;...&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div>`,17),l=[n];function p(h,r,o,k,c,d){return i(),a("div",null,l)}const E=s(t,[["render",p]]);export{g as __pageData,E as default};
