import{_ as s,c as a,o as i,V as e}from"./chunks/framework.DVGDG1kt.js";const E=JSON.parse('{"title":"Consultas Paralelas","description":"","frontmatter":{},"headers":[],"relativePath":"guides-and-concepts/parallel-queries.md","filePath":"guides-and-concepts/parallel-queries.md"}'),n={name:"guides-and-concepts/parallel-queries.md"},l=e(`<h1 id="consultas-paralelas" tabindex="-1">Consultas Paralelas <a class="header-anchor" href="#consultas-paralelas" aria-label="Permalink to &quot;Consultas Paralelas&quot;">​</a></h1><div class="info custom-block"><p class="custom-block-title">INFO</p><p>La fuente original (en ingles) de este tutorial se encuentra <a href="https://tanstack.com/query/latest/docs/framework/vue/guides/parallel-queries" target="_blank" rel="noreferrer">aquí</a></p></div><p>Las consultas &quot;paralelas&quot; son consultas que se ejecutan en paralelo o al mismo tiempo para maximizar la concurrencia de recuperación.</p><h2 id="consultas-paralelas-manuales" tabindex="-1">Consultas Paralelas Manuales <a class="header-anchor" href="#consultas-paralelas-manuales" aria-label="Permalink to &quot;Consultas Paralelas Manuales&quot;">​</a></h2><p>Cuando el número de consultas paralelas no cambia, no hay ningún esfuerzo adicional para utilizar consultas paralelas. ¡Simplemente use cualquier número de ganchos <code>useQuery</code> y <code>useInfiniteQuery</code> de TanStack Query uno al lado del otro!</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setup</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> lang</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// The following queries will execute in parallel</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> usersQuery</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> useQuery</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ queryKey: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;users&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], queryFn: fetchUsers })</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> teamsQuery</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> useQuery</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ queryKey: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;teams&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], queryFn: fetchTeams })</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> projectsQuery</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> useQuery</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  queryKey: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;projects&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  queryFn: fetchProjects,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="consultas-dinamicas-paralelas-con-usequeries" tabindex="-1">Consultas Dinámicas Paralelas con <code>useQueries</code> <a class="header-anchor" href="#consultas-dinamicas-paralelas-con-usequeries" aria-label="Permalink to &quot;Consultas Dinámicas Paralelas con \`useQueries\`&quot;">​</a></h2><p>Si la cantidad de consultas que necesita ejecutar cambia de una renderización a otra, no puede utilizar consultas manuales ya que eso violaría las reglas de los ganchos. En cambio, TanStack Query proporciona un gancho <code>useQueries</code>, que puede utilizar para ejecutar dinámicamente tantas consultas en paralelo como desee.</p><p><code>useQueries</code> acepta un objeto de opciones con una clave de consulta cuyo valor es una matriz de objetos de consulta. Devuelve una serie de resultados de la consulta:</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> users</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> computed</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> queries</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> computed</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> users.value.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">map</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">user</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      queryKey: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;user&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, user.id],</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      queryFn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> fetchUserById</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(user.id),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> userQueries</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> useQueries</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({queries: queries})</span></span></code></pre></div>`,10),t=[l];function h(p,k,r,d,o,u){return i(),a("div",null,t)}const g=s(n,[["render",h]]);export{E as __pageData,g as default};
