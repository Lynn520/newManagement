module.exports = {
    'buyramkbytes': {
        'en': {
          'actionName': 'buyramkbytes',
          'template': '<Token symbol="buyramkbytes"/><Account to="data.payer"/>  bought  <Account to="data.receiver"/>  {data.kbytes}  KiB memory'
        },
        'zh': {
          'actionName': '购买内存',
          'template': '<Token symbol="购买内存"/><Account to="data.payer"/>  购买了  <Account to="data.receiver"/>  {data.kbytes}  KiB 内存'
        },
        'ja': {
          'actionName': 'buyramkbytes',
          'template': '<Token symbol="buyramkbytes"/><Account to="data.payer"/>  bought  <Account to="data.receiver"/>  {data.kbytes}  KiB memory'
        },
        'cs': {
          'actionName': '赎回质押',
          'template': '<If condition="name">ddd</If><If condition="!name">1122</If><Account to="from.to"  className="wang" /><Account to="from.to"/>{arr[3].dd} { quantity }赎回了质押的{ quan.www }<Account to="quan.www"/>{arr[3].dd}'
        }
    },
    'newaccount': {
        'en': {
          'actionName': 'newaccount',
          'template': '<Token symbol="newaccount"/><Account to="data.creator"/>created new account<Account className="mr-lt10" to="data.name"/>'
        },
        'zh': {
          'actionName': '创建账户',
          'template': '<Token symbol="创建账户"/><Account to="data.creator"/>创建了账户<Account className="mr-lt10" to="data.name"/>'
        },
        'ja': {
          'actionName': '質草を請け戻す',
          'template': '<Token symbol="newaccount"/><Account to="data.creator"/>created new account<Account className="mr-lt10" to="data.name"/>'
        }
    },
    'delegatebw': {
        'en': {
          'actionName': 'delegatebw',
          'template': '<Token symbol="delegatebw"/><Account to="data.from"/>  delegated for  <Account className="mr-lt10" to="data.receiver"/>  {data.stake_net_quantity} in Net and {data.stake_cpu_quantity} in CPU，'
        },
        'zh': {
          'actionName': '抵押资源',
          'template': '<Token symbol="抵押资源"/><Account to="data.from"/>  为  <Account className="mr-lt10" to="data.receiver"/>  抵押了价值  {data.stake_net_quantity} 的带宽和价值 {data.stake_cpu_quantity} 的CPU，'
        },
        'ja': {
          'actionName': 'delegatebw',
          'template': '<Token symbol="delegatebw"/><Account to="data.from"/>  delegated for  <Account className="mr-lt10" to="data.receiver"/>  {data.stake_net_quantity} in Net and {data.stake_cpu_quantity} in CPU，'
        }
    },
    'undelegatebw': {
        'en': {
          'actionName': 'undelegatebw',
          'template': '<Token symbol="undelegatebw"/><Account to="data.from"/>  delegated forunstaked from the account  <Account className="mr-lt10" to="data.receiver"/>  {data.stake_net_quantity} in Net and {data.stake_cpu_quantity} in CPU，'
        },
        'zh': {
          'actionName': '赎回资源',
          'template': '<Token symbol="undelegatebw"/><Account to="data.from"/>  赎回了之前为  <Account className="mr-lt10" to="data.receiver"/>  抵押的价值  {data.stake_net_quantity} 的带宽和价值 {data.stake_cpu_quantity} 的CPU，'
        },
        'ja': {
          'actionName': 'undelegatebw',
          'template': '<Token symbol="undelegatebw"/><Account to="data.from"/>  delegated forunstaked from the account  <Account className="mr-lt10" to="data.receiver"/>  {data.stake_net_quantity} in Net and {data.stake_cpu_quantity} in CPU，'
        }
    },
    'sellram': {
        'en': {
          'actionName': 'sellram',
          'template': '<Token symbol="sellram"/><Account to="data.account"/>  sell  <Account className="mr-lt10" to="data.kbytes"/>  bytes RAM'
        },
        'zh': {
          'actionName': '卖出内存',
          'template': '<Token symbol="卖出内存"/><Account to="data.account"/>  卖出了  <Account className="mr-lt10" to="data.kbytes"/>  bytes内存'
        },
        'ja': {
          'actionName': 'sellram',
          'template': '<Token symbol="sellram"/><Account to="data.account"/>  sell  <Account className="mr-lt10" to="data.kbytes"/>  bytes RAM'
        }
    },
    'refund': {
        'en': {
          'actionName': 'refund',
          'template': '<Token symbol="refund"/><Account to="data.owner"/>  Unstake Refund'
        },
        'zh': {
          'actionName': '赎回退款',
          'template': '<Token symbol="赎回退款"/><Account to="data.owner"/>  赎回了退款'
        },
        'ja': {
          'actionName': 'refund',
          'template': '<Token symbol="refund"/><Account to="data.owner"/>  Unstake Refund'
        }
    },
    'claimprod': {
        'en': {
          'actionName': 'claimprod',
          'template': '<Token symbol="claimprod"/><Account to="data.owner"/>  Claim Rewards'
        },
        'zh': {
          'actionName': '申请奖励',
          'template': '<Token symbol="申请奖励"/><Account to="data.owner"/>  申请了奖励'
        },
        'ja': {
          'actionName': 'claimprod',
          'template': '<Token symbol="claimprod"/><Account to="data.owner"/>  Claim Rewards'
        }
    },
    'claimvoter': {
        'en': {
          'actionName': 'claimvoter',
          'template': '<Token symbol="claimvoter"/><Account to="data.owner"/>  got it Reward for voting for  <Account to="data.owner"/>'
        },
        'zh': {
          'actionName': '申请奖励',
          'template': '<Token symbol="申请奖励"/><Account to="data.owner"/>  申请了为  <Account to="data.owner"/>  投票的奖励'
        },
        'ja': {
          'actionName': 'claimvoter',
          'template': '<Token symbol="claimvoter"/><Account to="data.owner"/>  got it Reward for voting for  <Account to="data.owner"/>'
        }
    },
    'issue': {
        'en': {
          'actionName': 'issue',
          'template': '<Token symbol="issue"/>  System issued  <Account to="data.quantity"/>  to  <Account to="data.to"/>  MEMO:  {data.memo}'
        },
        'zh': {
          'actionName': '代币增发',
          'template': '<Token symbol="代币增发"/>  系统增发了  <Account to="data.quantity"/>  给  <Account to="data.to"/>  MEMO:  {data.memo}'
        },
        'ja': {
          'actionName': 'issue',
          'template': '<Token symbol="issue"/>  System issued  <Account to="data.quantity"/>  to  <Account to="data.to"/>  MEMO:  {data.memo}'
        }
    },
    'transfer': {
        'en': {
          'actionName': 'transfer',
          'template': '<Token symbol="transfer"/><Transfer className="describeText" text="from:"/><Account to="data.from"/>→   <Account className="mr-lt10" to="data.to"/><Transfer className="describeText" text="memo:"/>'
        },
        'zh': {
          'actionName': '代币转账',
          'template': '<Token symbol="代币转账"/><Transfer className="describeText" text="from:"/><Account to="data.from"/>→   <Account className="mr-lt10" to="data.to"/><Transfer className="describeText" text="memo:"/>'
        },
        'ja': {
          'actionName': 'transfer',
          'template': '<Token symbol="transfer"/><Transfer className="describeText" text="from:"/><Account to="data.from"/>→   <Account className="mr-lt10" to="data.to"/><Transfer className="describeText" text="memo:"/>'
        }
    },
    'bidname': {
        'en': {
          'actionName': 'bidname',
          'template': '<Token symbol="bidname"/>bidname'
        },
        'zh': {
          'actionName': '竞拍账户',
          'template': '<Token symbol="竞拍账户"/>竞拍账户'
        },
        'ja': {
          'actionName': 'bidname',
          'template': '<Token symbol="bidname"/>bidname'
        }
    },
    'bidrefund': {
        'en': {
          'actionName': 'bidrefund',
          'template': '<Token symbol="bidrefund"/>bidrefund'
        },
        'zh': {
          'actionName': '竞拍退还',
          'template': '<Token symbol="竞拍退还"/>竞拍退还'
        },
        'ja': {
          'actionName': 'bidrefund',
          'template': '<Token symbol="bidrefund"/>bidrefund'
        }
    },
    'updateauth': {
        'en': {
          'actionName': 'updateauth',
          'template': '<Token symbol="updateauth"/>updateauth'
        },
        'zh': {
          'actionName': '更新授权',
          'template': '<Token symbol="更新授权"/>更新授权'
        },
        'ja': {
          'actionName': 'updateauth',
          'template': '<Token symbol="updateauth"/>updateauth'
        }
    },
    'deleteauth': {
        'en': {
          'actionName': 'deleteauth',
          'template': '<Token symbol="deleteauth"/>deleteauth'
        },
        'zh': {
          'actionName': '删除授权',
          'template': '<Token symbol="删除授权"/>删除授权'
        },
        'ja': {
          'actionName': 'deleteauth',
          'template': '<Token symbol="deleteauth"/>deleteauth'
        }
    },
    'linkauth': {
        'en': {
          'actionName': 'linkauth',
          'template': '<Token symbol="linkauth"/>linkauth'
        },
        'zh': {
          'actionName': '链接授权',
          'template': '<Token symbol="链接授权"/>链接授权'
        },
        'ja': {
          'actionName': 'linkauth',
          'template': '<Token symbol="linkauth"/>linkauth'
        }
    },
    'unlinkauth': {
        'en': {
          'actionName': 'unlinkauth',
          'template': '<Token symbol="unlinkauth"/>unlinkauth'
        },
        'zh': {
          'actionName': '取消链接授权',
          'template': '<Token symbol="取消链接授权"/>取消链接授权'
        },
        'ja': {
          'actionName': 'unlinkauth',
          'template': '<Token symbol="unlinkauth"/>unlinkauth'
        }
    },
    'canceldelay': {
        'en': {
          'actionName': 'canceldelay',
          'template': '<Token symbol="canceldelay"/>canceldelay'
        },
        'zh': {
          'actionName': '取消延迟交易',
          'template': '<Token symbol="取消延迟交易"/>取消延迟交易'
        },
        'ja': {
          'actionName': 'canceldelay',
          'template': '<Token symbol="canceldelay"/>canceldelay'
        }
    },
    'regproducer': {
        'en': {
          'actionName': 'regproducer',
          'template': '<Token symbol="regproducer"/>regproducer'
        },
        'zh': {
          'actionName': '注册生产者',
          'template': '<Token symbol="注册生产者"/>注册生产者'
        },
        'ja': {
          'actionName': 'regproducer',
          'template': '<Token symbol="regproducer"/>regproducer'
        }
    },
    'unregprod': {
        'en': {
          'actionName': 'unregprod',
          'template': '<Token symbol="unregprod"/>unregprod'
        },
        'zh': {
          'actionName': '取消生产者',
          'template': '<Token symbol="取消生产者"/>取消生产者'
        },
        'ja': {
          'actionName': 'unregprod',
          'template': '<Token symbol="unregprod"/>unregprod'
        }
    },
    'create': {
        'en': {
          'actionName': 'create',
          'template': '<Token symbol="create"/>create'
        },
        'zh': {
          'actionName': '创建代币',
          'template': '<Token symbol="创建代币"/>创建代币'
        },
        'ja': {
          'actionName': 'create',
          'template': '<Token symbol="create"/>create'
        }
    },
}
