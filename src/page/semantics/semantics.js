import React,{ Component } from 'react';
import { Link } from "react-router-dom";
import { QueryPC, QueryMobile } from '$components/QueryComponents'

export const semantic = (dataSource,language) => {
    let semanticStr
    switch ( dataSource.name ){
        case 'buyramkbytes':
            switch (language){
                case 'Chinese':
                    semanticStr = <div>
                        <Link to={{pathname: 'account', search:`?account=${dataSource.data.payer}` }}>{dataSource.data.payer}</Link>
                        &nbsp;&nbsp;给&nbsp;&nbsp;
                        <Link to={{pathname: 'account', search:`?account=${dataSource.data.receiver}` }}>{dataSource.data.receiver}</Link> 购买了 {dataSource.data.kbytes} KiB 内存
                    </div>
                    break;
                case 'English':
                    semanticStr = <div>
                        <Link to={{pathname: 'account', search:`?account=${dataSource.data.payer}` }}>{dataSource.data.payer}</Link>
                        &nbsp;&nbsp;bought&nbsp;&nbsp;
                        <Link to={{pathname: 'account', search:`?account=${dataSource.data.receiver}` }}>{dataSource.data.receiver}</Link>  {dataSource.data.kbytes} KiB memory
                    </div>
                    break;
                case 'Japanese':
                    semanticStr = <div>
                        <Link to={{pathname: 'account', search:`?account=${dataSource.data.payer}` }}>{dataSource.data.payer}</Link>
                        &nbsp;&nbsp;bought&nbsp;&nbsp;
                        <Link to={{pathname: 'account', search:`?account=${dataSource.data.receiver}` }}>{dataSource.data.receiver}</Link>  {dataSource.data.kbytes} KiB memory
                    </div>
                    break;
            }
        break;


        case 'newaccount':
            switch (language){
                case 'Chinese':
                    semanticStr = <div>
                        <Link to={{pathname: 'account', search:`?account=${dataSource.data.creator}` }}>{dataSource.data.creator}</Link>
                        &nbsp;&nbsp;创建了账户&nbsp;&nbsp;
                        <Link to={{pathname: 'account', search:`?account=${dataSource.data.name}` }}>{dataSource.data.name}</Link>
                    </div>
                    break;
                case 'English':
                    semanticStr = <div>
                        <Link to={{pathname: 'account', search:`?account=${dataSource.data.creator}` }}>{dataSource.data.creator}</Link>
                        &nbsp;&nbsp;created new account&nbsp;&nbsp;
                        <Link to={{pathname: 'account', search:`?account=${dataSource.data.name}` }}>{dataSource.data.name}</Link>
                    </div>
                    break;
                case 'Japanese':
                    semanticStr = <div>
                        <Link to={{pathname: 'account', search:`?account=${dataSource.data.creator}` }}>{dataSource.data.creator}</Link>
                        &nbsp;&nbsp;created new account&nbsp;&nbsp;
                        <Link to={{pathname: 'account', search:`?account=${dataSource.data.name}` }}>{dataSource.data.name}</Link>
                    </div>
                    break;
            }
        break;


        case 'delegatebw':
            switch (language){
                case 'Chinese':
                    semanticStr = <div>
                        <Link to={{pathname: 'account', search:`?account=${dataSource.data.from}` }}>{dataSource.data.from}</Link>
                        &nbsp;&nbsp;为&nbsp;&nbsp;
                        <Link to={{pathname: 'account', search:`?account=${dataSource.data.receiver}` }}>{dataSource.data.receiver}</Link>
                        &nbsp;&nbsp;抵押了价值&nbsp;&nbsp;
                        {dataSource.data.stake_net_quantity} 的带宽和价值 {dataSource.data.stake_cpu_quantity} 的CPU，
                        {dataSource.data.transfer?'转移了FSC资产':'未转移FSC资产'}
                    </div>
                    break;
                case 'English':
                    semanticStr = <div>
                        <Link to={{pathname: 'account', search:`?account=${dataSource.data.from}` }}>{dataSource.data.from}</Link>
                        &nbsp;&nbsp;delegated for &nbsp;&nbsp;
                        <Link to={{pathname: 'account', search:`?account=${dataSource.data.receiver}` }}>{dataSource.data.receiver}</Link>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        {dataSource.data.stake_net_quantity} in Net and {dataSource.data.stake_cpu_quantity} in CPU，
                        {dataSource.data.transfer? 'Transferred FSC' : 'without FSC transferred'}
                    </div>
                    break;
                case 'Japanese':
                    semanticStr = <div>
                        <Link to={{pathname: 'account', search:`?account=${dataSource.data.from}` }}>{dataSource.data.from}</Link>
                        &nbsp;&nbsp;delegated for &nbsp;&nbsp;
                        <Link to={{pathname: 'account', search:`?account=${dataSource.data.receiver}` }}>{dataSource.data.receiver}</Link>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        {dataSource.data.stake_net_quantity} in Net and {dataSource.data.stake_cpu_quantity} in CPU，
                        {dataSource.data.transfer? 'Transferred FSC' : 'without FSC transferred'}
                    </div>
                    break;
            }
        break;


        case 'undelegatebw':
            switch (language){
                case 'Chinese':
                    semanticStr = <div>
                        <Link to={{pathname: 'account', search:`?account=${dataSource.data.from}` }}>{dataSource.data.from}</Link>
                        &nbsp;&nbsp;赎回了之前为&nbsp;&nbsp;
                        <Link to={{pathname: 'account', search:`?account=${dataSource.data.receiver}` }}>{dataSource.data.receiver}</Link>
                        &nbsp;&nbsp;抵押的价值&nbsp;&nbsp;
                        {dataSource.data.unstake_net_quantity} 的带宽和价值 {dataSource.data.unstake_cpu_quantity} 的CPU，
                    </div>
                    break;
                case 'English':
                    semanticStr = <div>
                        <Link to={{pathname: 'account', search:`?account=${dataSource.data.from}` }}>{dataSource.data.from}</Link>
                        &nbsp;&nbsp;unstaked from the account &nbsp;&nbsp;
                        <Link to={{pathname: 'account', search:`?account=${dataSource.data.receiver}` }}>{dataSource.data.receiver}</Link>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        {dataSource.data.stake_net_quantity} in Net and {dataSource.data.stake_cpu_quantity} in CPU，
                        {dataSource.data.transfer? 'Transferred FSC' : 'without FSC transferred'}
                    </div>
                    break;
                case 'Japanese':
                    semanticStr = <div>
                        <Link to={{pathname: 'account', search:`?account=${dataSource.data.from}` }}>{dataSource.data.from}</Link>
                        &nbsp;&nbsp;unstaked from the account &nbsp;&nbsp;
                        <Link to={{pathname: 'account', search:`?account=${dataSource.data.receiver}` }}>{dataSource.data.receiver}</Link>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        {dataSource.data.stake_net_quantity} in Net and {dataSource.data.stake_cpu_quantity} in CPU，
                        {dataSource.data.transfer? 'Transferred FSC' : 'without FSC transferred'}
                    </div>
                    break;
            }
        break;


        case 'sellram':
            switch (language){
                case 'Chinese':
                    semanticStr = <div>
                        <Link to={{pathname: 'account', search:`?account=${dataSource.data.account}` }}>{dataSource.data.account}</Link>
                        &nbsp;&nbsp;卖出了&nbsp;&nbsp;
                        <Link to={{pathname: 'account', search:`?account=${dataSource.data.bytes}` }}>{dataSource.data.bytes}</Link>
                        &nbsp;&nbsp;bytes内存&nbsp;&nbsp;
                    </div>
                    break;
                case 'English':
                    semanticStr = <div>
                        <Link to={{pathname: 'account', search:`?account=${dataSource.data.account}` }}>{dataSource.data.account}</Link>
                        &nbsp;&nbsp;sell&nbsp;&nbsp;
                        <Link to={{pathname: 'account', search:`?account=${dataSource.data.bytes}` }}>{dataSource.data.bytes}</Link>
                        &nbsp;&nbsp;bytes RAM&nbsp;&nbsp;
                    </div>
                    break;
                case 'Japanese':
                    semanticStr = <div>
                        <Link to={{pathname: 'account', search:`?account=${dataSource.data.account}` }}>{dataSource.data.account}</Link>
                        &nbsp;&nbsp;sell&nbsp;&nbsp;
                        <Link to={{pathname: 'account', search:`?account=${dataSource.data.bytes}` }}>{dataSource.data.bytes}</Link>
                        &nbsp;&nbsp;bytes RAM&nbsp;&nbsp;
                    </div>
                    break;
            }
        break;


        case 'refund':
            switch (language){
                case 'Chinese':
                    semanticStr = <div>
                        <Link to={{pathname: 'account', search:`?account=${dataSource.data.owner}` }}>{dataSource.data.owner}</Link>
                        &nbsp;&nbsp;赎回了退款&nbsp;&nbsp;
                    </div>
                    break;
                case 'English':
                    semanticStr = <div>
                        <Link to={{pathname: 'account', search:`?account=${dataSource.data.owner}` }}>{dataSource.data.owner}</Link>
                        &nbsp;&nbsp;Unstake Refund&nbsp;&nbsp;
                    </div>
                    break;
                case 'Japanese':
                    semanticStr = <div>
                        <Link to={{pathname: 'account', search:`?account=${dataSource.data.owner}` }}>{dataSource.data.owner}</Link>
                        &nbsp;&nbsp;Unstake Refund&nbsp;&nbsp;
                    </div>
                    break;
            }
        break;


        case 'claimprod':
            switch (language){
                case 'Chinese':
                    semanticStr = <div>
                        <Link to={{pathname: 'account', search:`?account=${dataSource.data.owner}` }}>{dataSource.data.owner}</Link>
                        &nbsp;&nbsp;申请了奖励&nbsp;&nbsp;
                    </div>
                    break;
                case 'English':
                    semanticStr = <div>
                        <Link to={{pathname: 'account', search:`?account=${dataSource.data.owner}` }}>{dataSource.data.owner}</Link>
                        &nbsp;&nbsp;Claim Rewards &nbsp;&nbsp;
                    </div>
                    break;
                case 'Japanese':
                    semanticStr = <div>
                        <Link to={{pathname: 'account', search:`?account=${dataSource.data.owner}` }}>{dataSource.data.owner}</Link>
                        &nbsp;&nbsp;Claim Rewards &nbsp;&nbsp;
                    </div>
                    break;
            }
        break;

        case 'claimvoter':
            switch (language){
                case 'Chinese':
                    semanticStr = <div>
                        <Link to={{pathname: 'account', search:`?account=${dataSource.data.owner}` }}>{dataSource.data.owner}</Link>
                        &nbsp;&nbsp;申请了为&nbsp;&nbsp;
                        <Link to={{pathname: 'account', search:`?account=${dataSource.data.producer}` }}>{dataSource.data.producer}</Link>
                        &nbsp;&nbsp;投票的奖励&nbsp;&nbsp;
                    </div>
                    break;
                case 'English':
                    semanticStr = <div>
                        <Link to={{pathname: 'account', search:`?account=${dataSource.data.owner}` }}>{dataSource.data.owner}</Link>
                        &nbsp;&nbsp;got it Reward for voting for&nbsp;&nbsp;
                        <Link to={{pathname: 'account', search:`?account=${dataSource.data.producer}` }}>{dataSource.data.producer}</Link>
                    </div>
                    break;
                case 'Japanese':
                    semanticStr = <div>
                        <Link to={{pathname: 'account', search:`?account=${dataSource.data.owner}` }}>{dataSource.data.owner}</Link>
                        &nbsp;&nbsp;got it Reward for voting for&nbsp;&nbsp;
                        <Link to={{pathname: 'account', search:`?account=${dataSource.data.producer}` }}>{dataSource.data.producer}</Link>
                    </div>
                    break;
            }
        break;


        case 'issue':
            switch (language){
                case 'Chinese':
                    semanticStr = <div>
                        &nbsp;&nbsp;系统增发了&nbsp;&nbsp; {dataSource.data.quantity}&nbsp;&nbsp;给&nbsp;&nbsp;
                        <Link to={{pathname: 'account', search:`?account=${dataSource.data.to}` }}>{dataSource.data.to}</Link>
                        &nbsp;&nbsp;MEMO:&nbsp;&nbsp; {dataSource.data.memo}
                    </div>
                    break;
                case 'English':
                    semanticStr = <div>
                        &nbsp;&nbsp;System issued&nbsp;&nbsp; {dataSource.data.quantity}&nbsp;&nbsp;to&nbsp;&nbsp;
                        <Link to={{pathname: 'account', search:`?account=${dataSource.data.to}` }}>{dataSource.data.to}</Link>
                        &nbsp;&nbsp;MEMO:&nbsp;&nbsp; {dataSource.data.memo}
                    </div>
                    break;
                case 'Japanese':
                    semanticStr = <div>
                        &nbsp;&nbsp;System issued&nbsp;&nbsp; {dataSource.data.quantity}&nbsp;&nbsp;to&nbsp;&nbsp;
                        <Link to={{pathname: 'account', search:`?account=${dataSource.data.to}` }}>{dataSource.data.to}</Link>
                        &nbsp;&nbsp;MEMO:&nbsp;&nbsp; {dataSource.data.memo}
                    </div>
                    break;
            }
        break;






        case 'transfer':
            switch (language){
                case 'Chinese':
                    semanticStr = <div>
                        <div>
                            <span className={`describeText`}>from:</span>
                            <Link className={`accountName`} to={{pathname: 'account', search:`?account=${dataSource.data.from}`  }}>{dataSource.data.from}</Link>
                            →&nbsp;&nbsp;&nbsp;
                            <span className={`describeText`}>to:</span>
                            <Link className={`accountName`} to={{pathname: 'account', search:`?account=${dataSource.data.to}`  }}>{dataSource.data.to}</Link>
                            <QueryMobile><br /></QueryMobile>
                            <span className={`describeText`}>quantity:</span>
                            <span className={`quantity`}>{dataSource.data.quantity}</span>
                        </div>
                        {dataSource.data.memo&&<div><span className={`describeText`}>memo:</span>{dataSource.data.memo}</div>}
                    </div>
                    break;
                case 'English':
                    semanticStr = <div>
                        <div>
                            <span className={`describeText`}>from:</span>
                            <Link className={`accountName`} to={{pathname: 'account', search:`?account=${dataSource.data.from}`  }}>{dataSource.data.from}</Link>
                            →&nbsp;&nbsp;&nbsp;
                            <span className={`describeText`}>to:</span>
                            <Link className={`accountName`} to={{pathname: 'account', search:`?account=${dataSource.data.to}`  }}>{dataSource.data.to}</Link>
                            <QueryMobile><br /></QueryMobile>
                            <span className={`describeText`}>quantity:</span>
                            <span className={`quantity`}>{dataSource.data.quantity}</span>
                        </div>
                        {dataSource.data.memo&&<div><span className={`describeText`}>memo:</span>{dataSource.data.memo}</div>}
                    </div>
                    break;
                case 'Japanese':
                    semanticStr = <div>
                        <div>
                            <span className={`describeText`}>from:</span>
                            <Link className={`accountName`} to={{pathname: 'account', search:`?account=${dataSource.data.from}`  }}>{dataSource.data.from}</Link>
                            →&nbsp;&nbsp;&nbsp;
                            <span className={`describeText`}>to:</span>
                            <Link className={`accountName`} to={{pathname: 'account', search:`?account=${dataSource.data.to}`  }}>{dataSource.data.to}</Link>
                            <QueryMobile><br /></QueryMobile>
                            <span className={`describeText`}>quantity:</span>
                            <span className={`quantity`}>{dataSource.data.quantity}</span>
                        </div>
                        {dataSource.data.memo&&<div><span className={`describeText`}>memo:</span>{dataSource.data.memo}</div>}
                    </div>
                    break;
            }
        break;

        case 'bidname':
            switch (language){
                case 'Chinese':
                    semanticStr = <div>
                        竞拍账户
                    </div>
                    break;
                case 'English':
                    semanticStr = <div>
                        bidname
                    </div>
                    break;
                case 'Japanese':
                    semanticStr = <div>
                        bidname
                    </div>
                    break;
            }
        break;

        case 'bidrefund':
            switch (language){
                case 'Chinese':
                    semanticStr = <div>
                        竞拍退还
                    </div>
                    break;
                case 'English':
                    semanticStr = <div>
                        bidrefund
                    </div>
                    break;
                case 'Japanese':
                    semanticStr = <div>
                        bidrefund
                    </div>
                    break;
            }
        break;

        case 'updateauth':
            switch (language){
                case 'Chinese':
                    semanticStr = <div>
                        更新授权
                    </div>
                    break;
                case 'English':
                    semanticStr = <div>
                        updateauth
                    </div>
                    break;
                case 'Japanese':
                    semanticStr = <div>
                        updateauth
                    </div>
                    break;
            }
        break;

        case 'deleteauth':
            switch (language){
                case 'Chinese':
                    semanticStr = <div>
                        删除授权
                    </div>
                    break;
                case 'English':
                    semanticStr = <div>
                        deleteauth
                    </div>
                    break;
                case 'Japanese':
                    semanticStr = <div>
                        deleteauth
                    </div>
                    break;
            }
        break;

        case 'linkauth':
            switch (language){
                case 'Chinese':
                    semanticStr = <div>
                        链接授权
                    </div>
                    break;
                case 'English':
                    semanticStr = <div>
                        linkauth
                    </div>
                    break;
                case 'Japanese':
                    semanticStr = <div>
                        linkauth
                    </div>
                    break;
            }
        break;

        case 'unlinkauth':
            switch (language){
                case 'Chinese':
                    semanticStr = <div>
                        取消链接授权
                    </div>
                    break;
                case 'English':
                    semanticStr = <div>
                        unlinkauth
                    </div>
                    break;
                case 'Japanese':
                    semanticStr = <div>
                        unlinkauth
                    </div>
                    break;
            }
        break;

        case 'canceldelay':
            switch (language){
                case 'Chinese':
                    semanticStr = <div>
                        取消延迟交易
                    </div>
                    break;
                case 'English':
                    semanticStr = <div>
                        canceldelay
                    </div>
                    break;
                case 'Japanese':
                    semanticStr = <div>
                        canceldelay
                    </div>
                    break;
            }
        break;

        case 'regproducer':
            switch (language){
                case 'Chinese':
                    semanticStr = <div>
                        注册生产者
                    </div>
                    break;
                case 'English':
                    semanticStr = <div>
                        regproducer
                    </div>
                    break;
                case 'Japanese':
                    semanticStr = <div>
                        regproducer
                    </div>
                    break;
            }
        break;

        case 'unregprod':
            switch (language){
                case 'Chinese':
                    semanticStr = <div>
                        取消生产者
                    </div>
                    break;
                case 'English':
                    semanticStr = <div>
                        unregprod
                    </div>
                    break;
                case 'Japanese':
                    semanticStr = <div>
                        unregprod
                    </div>
                    break;
            }
        break;

        case 'create':
            switch (language){
                case 'Chinese':
                    semanticStr = <div>
                        创建代币
                    </div>
                    break;
                case 'English':
                    semanticStr = <div>
                        create
                    </div>
                    break;
                case 'Japanese':
                    semanticStr = <div>
                        create
                    </div>
                    break;
            }
        break;

        default:
            semanticStr = 'noMatch'
    }
    return semanticStr
}
