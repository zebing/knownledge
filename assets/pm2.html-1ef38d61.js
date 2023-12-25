import{_ as l,M as d,p as r,q as t,R as e,t as i,N as s,a1 as a}from"./framework-5866ffd3.js";const o={},c=a(`<h1 id="pm2" tabindex="-1"><a class="header-anchor" href="#pm2" aria-hidden="true">#</a> pm2</h1><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install pm2@latest -g
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件</h2>`,4),m={href:"https://pm2.keymetrics.io/docs/usage/application-declaration/",target:"_blank",rel:"noopener noreferrer"},v=a(`<p>使用pm2 start pm2.config.js --env production，它将使用属性env，其中name是此处的production，因此它将使用NODE_ENV = production启动您的应用程序。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>module.exports = {
  apps : [{
    name        : &quot;pm2&quot;,
    script      : &quot;./server/index.js&quot;,
    watch       : true,
    env: {
      &quot;NODE_ENV&quot;: &quot;development&quot;,
      &quot;BUILD_ENV&quot;: &quot;development&quot;
    },
    env_test: {
      &quot;NODE_ENV&quot;: &quot;production&quot;,
      &quot;BUILD_ENV&quot;: &quot;test&quot;
    },
    env_production: {
       &quot;NODE_ENV&quot;: &quot;production&quot;,
       &quot;BUILD_ENV&quot;: &quot;production&quot;
    }
  }]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># Fork mode
pm2 start app.js --name my-api # Name process

# Cluster mode
pm2 start app.js -i 0        # Will start maximum processes with LB depending on available CPUs
pm2 start app.js -i max      # Same as above, but deprecated.
pm2 scale app +3             # Scales \`app\` up by 3 workers
pm2 scale app 2              # Scales \`app\` up or down to 2 workers total

# Listing

pm2 list               # Display all processes status
pm2 jlist              # Print process list in raw JSON
pm2 prettylist         # Print process list in beautified JSON

pm2 describe 0         # Display all informations about a specific process

pm2 monit  

# Logs

pm2 logs [--raw]       # Display all processes logs in streaming
pm2 flush              # Empty all log files
pm2 reloadLogs         # Reload all logs

# Actions

pm2 stop all           # Stop all processes
pm2 restart all        # Restart all processes

pm2 reload all         # Will 0s downtime reload (for NETWORKED apps)

pm2 stop 0             # Stop specific process id
pm2 restart 0          # Restart specific process id

pm2 delete 0           # Will remove process from pm2 list
pm2 delete all         # Will remove all processes from pm2 list

# Misc

pm2 reset &lt;process&gt;    # Reset meta data (restarted time...)
pm2 updatePM2          # Update in memory pm2
pm2 ping               # Ensure pm2 daemon has been launched
pm2 sendSignal SIGUSR2 my-app # Send system signal to script
pm2 start app.js --no-daemon
pm2 start app.js --no-vizion
pm2 start app.js --no-autorestart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="pm2-集群-不停机更新" tabindex="-1"><a class="header-anchor" href="#pm2-集群-不停机更新" aria-hidden="true">#</a> pm2 集群 - 不停机更新</h2>`,5),u={href:"https://pm2.keymetrics.io/docs/usage/cluster-mode/",target:"_blank",rel:"noopener noreferrer"},p=e("h2",{id:"docker-pm2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#docker-pm2","aria-hidden":"true"},"#"),i(" docker-pm2")],-1),b={href:"https://pm2.keymetrics.io/docs/usage/docker-pm2-nodejs/",target:"_blank",rel:"noopener noreferrer"};function h(_,g){const n=d("ExternalLinkIcon");return r(),t("div",null,[c,e("p",null,[e("a",m,[i("配置文件"),s(n)])]),v,e("p",null,[e("a",u,[i("Cluster Mode"),s(n)])]),p,e("p",null,[e("a",b,[i("文档"),s(n)])])])}const q=l(o,[["render",h],["__file","pm2.html.vue"]]);export{q as default};
