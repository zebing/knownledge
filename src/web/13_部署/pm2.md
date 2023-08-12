# pm2

## 安装
```
npm install pm2@latest -g
```

## 配置文件
[配置文件](https://pm2.keymetrics.io/docs/usage/application-declaration/)

使用pm2 start pm2.config.js --env production，它将使用属性env，其中name是此处的production，因此它将使用NODE_ENV = production启动您的应用程序。

```
module.exports = {
  apps : [{
    name        : "pm2",
    script      : "./server/index.js",
    watch       : true,
    env: {
      "NODE_ENV": "development",
      "BUILD_ENV": "development"
    },
    env_test: {
      "NODE_ENV": "production",
      "BUILD_ENV": "test"
    },
    env_production: {
       "NODE_ENV": "production",
       "BUILD_ENV": "production"
    }
  }]
}
```

## 常用命令
```
# Fork mode
pm2 start app.js --name my-api # Name process

# Cluster mode
pm2 start app.js -i 0        # Will start maximum processes with LB depending on available CPUs
pm2 start app.js -i max      # Same as above, but deprecated.
pm2 scale app +3             # Scales `app` up by 3 workers
pm2 scale app 2              # Scales `app` up or down to 2 workers total

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

pm2 reset <process>    # Reset meta data (restarted time...)
pm2 updatePM2          # Update in memory pm2
pm2 ping               # Ensure pm2 daemon has been launched
pm2 sendSignal SIGUSR2 my-app # Send system signal to script
pm2 start app.js --no-daemon
pm2 start app.js --no-vizion
pm2 start app.js --no-autorestart
```

## pm2 集群 - 不停机更新
[Cluster Mode](https://pm2.keymetrics.io/docs/usage/cluster-mode/)

## docker-pm2
[文档](https://pm2.keymetrics.io/docs/usage/docker-pm2-nodejs/)
