/**
 * Created by ANN on 2017/8/7.
 */
/**
 * Created by ANN on 2017/8/7.
 */
import  React from 'react';
import ReactDOM from 'react-dom';



export default class Detail_Center extends React.Component{

    constructor(){
        super()
        this.state = {
            list:["QQ空间","QQ好友","新浪微博","微信好友"],
            currentIndex:"10",
            sharename:"shareBoardhide",
            shareWeixin:"ewmBoxhdie"
        }
    }
    classnameNow(val,index){
        return this.state.currentIndex ==index?"activeLi":""
    }
    changeName(event){
            var val = event.target.getAttribute('data-cc');
            this.setState({currentIndex:val})
            if(val==3){
                this.setState({shareWeixin:"ewmBox"})
            }

    }
    showSharedBoard(event){
        var t =  event.currentTarget.className
        console.log(t)

            this.setState({sharename:"shareBd"})



    }
    hideSharedBoard(event){
        var t =  event.currentTarget.className
        console.log(t)

        this.setState({sharename:"shareBoardhide"})
    }
    render(){
        return(
            <div className="DetailCenterComponent">
                <h1 className="centerTitle"> 58公斤黄金被扣18年 涉事五人获国家赔偿1100万</h1>
                <div className="comeFrom"><span>社会万象</span><span>法制晚报</span><span style={{color:"#b4b4b4"}}>2017-08-07 18:47</span></div>
                <div className="tipbutton">


                    <div className="a_share" id="shareBtn" onMouseOver={this.showSharedBoard.bind(this)}
                         onMouseOut={this.hideSharedBoard.bind(this)}>
                        <span className="shareTitle" style={{cursor:'pointer'}}

                        >
                            分享
                            <i></i>
                        </span>
                        <div className={this.state.sharename} >
                            <ul className="shareBtn16">

                                {
                                    this.state.list.map((val,index)=>{
                                        if(index==3){
                                            return(
                                                <li key={index} className={this.classnameNow(val,index)} data-cc={index} onMouseOver={this.changeName.bind(this)}>
                                                    {val}
                                                    <div className={this.state.shareWeixin} id="upshareqrcode"  title="http://tech.qq.com/a/20170808/047291.htm">

                                                        <img alt="Scan me!" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFUAAABVCAYAAAA49ahaAAAFZ0lEQVR4Xu2d7ZriOgyD4f4vmn346BCCrb5yw87Ojs+vfQ4hdWVFll1gzqfT6XI68N/lEr/9fD5/7TqviV7b/l+233UzZ814S9ue5Lrjmios1ztvUK8gPMixFFTFkDljhIXRflHA5LrVG1VAza8pNhPGjjF+MZXc3LZ5g/oOswRVsaKqTUQntzDHtXMsTuLH2460ONNnpbsRYyNM3pjaoL4XWBeT5aAS/VF6S9josknF5DiTb2Nqg3o6NVMnn+2ego9qKrFdxLxHBWYuYq41U+vnmBrUIQOOw7i+zfGphwsV0UTlU6P3KzbM60mhIjGOba0qMOSEket91Pw3qEOhItkglsJpEKIhiTv0yI7xir2rmCwbqDiCH3VNTjII8A1qMiWqFJOVCSsz9bKyMgxRkIpZDjqY1ZLrkTXVmF6sYIN6h2Mlt84ZqMQwj9khPpGsIX16db4axes0JLTpaFAfUkKYaoNKZpdkLklYRKdUR2eezgSKPKmgs94vpjao74/qFCbytVlTCcWrbaqrlxVL5eo8iWlbQ07hzR83qDmsSj5UMhpUgc5hUAm1XTGfj81RS0WMueqoJLuGhiJbd7hQqeHJS/cwBUMr+7w/SeqPAXX+hIoabESCHa3fu3ma8QrwK5la9a5vU6oG9ZnKMqhO9Sfm37Uf23onme4kSsVE5rFzjDfbJDoxq/o3qM8GoUF9UI0MiajeI1DJ5N452m5wym2QSZKzxumixqNOYnzpqBrUO2TEi4/gRrXAqv5KU+csKqZGQZFiQiwdqdiRz3bBVAW2QVVV3OiyRr1OR397FFfMzEy7sk1S+Kcbj6ZkzvuVJaITODT6U20i6ZpIX9+gDnRrUN/rvmRqpfePhJ7IgXtElfXJJIbapcztkBM3uoSweDeo9y7J9bmyvc2+R1Xtr0mDQNmQ2ZbqeFFZKdJtUSuYfpaqQdVfWJsTG1oqpVGEWdViRnSWaKt7/azQ0GF5g/rICplHLAX1qE9VbZtikdNWKt1TLaxiOpl5kCL2otfbkLpBfXUBe7ZJJqpBvX/Dr9rtReCmAxU6yZmPXfWoVydgpAlwJlBEd0dfO8ve7bXM/Deoz4YgBE48mre+8RdRPbMWDjuIZdpbQxoCUtlp3OpENqhTtj4Kquqo9liT6Rwx6O7e0dHM9nBbUbW3bFo2TZUDAuPTxmE1FEPmKojz+4jfbVBNtP8pUGefWg2uwpzImoz7HI2F2DvVUVWl5e0Z1dEbcQL5b0F1fKoj3KTt3TvhznSeNA/K2NtelPhUAhhZQyo8OQ0ji1UR3WL68aBGukeYSaY90SNisrdifdX0kz0jElltquqoyI03qAOCDmAEePIk4brPKin5NqZSncu6pVlvo2M8659KQKSpe4Uti616b2W9njuqauAN6vCB4KxNJcfYTcAeM/d8q7qeO2QmkjBfj85DrCkV0TgX6Gx0WN1HuQfiU0ni9qQp/Wq6e1Mk8yQpdPSWxYfZBL7/RWrALHs3wFf9MkWDGmiqy8ysMDlDjPGaShOV4yDsJ/WBaDLZ58bUVb9J7Ux76Fwzs0Ju10XAaFDNX/v5NlAdg6yMfSTuqsJXqr8T626lBk81yMl6KZAV89+g5r9q+aKpRPCJ7pC+Xtkm8prrRY/atMg2qeJ52PyTWafqoSuv/TpQSVbHLM96pcy744Wj4kSSofQzijs8BUd7/0w2aDFpUIO/L9KgBr9ntYqpRBtJ10aOuOrEPiEf6olFFO+yQtWgPlO9/A/SKPNPTDRhIS0m5GSQSRSxmy9F7G+a/18HqpPViE3q/arCK9kg+kpdxtiuXv9N/DWJO2L6silVg/r860ANqvEjCqQFv5LrDzFvnRnJBJukAAAAAElFTkSuQmCC"/>
                                                    </div>
                                                </li>
                                            )
                                        }else{
                                            return(
                                                <li key={index} className={this.classnameNow(val,index)} data-cc={index} onMouseOver={this.changeName.bind(this)}>
                                                    {val}
                                                </li>
                                            )
                                        }
                                    })

                                }

                            </ul>

                        </div>
                    </div>
                    <span className="a_commentNum">
                        <a href="http://coral.qq.com/2065784589" id="cmtLink" bosszone="Ncomm" target="_blank">
                            <em id="cmtNum" href="http://coral.qq.com/2065784589" target="_blank">188</em>
                            评论
                        </a>
                    </span>
                    <span className="a_ilike" bosszone="textFvrtop">
                        <a href="javascript:void(0)">收藏</a>
                         <i></i>
                    </span>
                </div>

                <div className="centerText">
                    法制晚报·看法新闻（记者 温如军）今日，记者从“58公斤黄金被扣案”当事人马五德的代理律师张铁雁和彭红红处获悉，“58公斤黄金被扣案”有了最新进展，马五德、马占奎等五人获得国家赔偿共计1100万元人民币。

                    法制晚报·看法新闻记者获得的一份《西藏自治区高级人民法院赔偿委员会国家赔偿决定书》（下简称“决定书”）显示，1999年7月30日，马正清、马锦忠驾驶甘N-03488牌号东风车前往拉萨，行至那曲地段时，那曲公安处检查发现车内有大量黄金，遂对人、车进行扣押并以涉嫌非法运营、贩卖黄金为由，对马正清、马锦忠予以刑事拘留。

                    根据二人的交代，同年8月1日，那曲公安处刑侦队民警在拉萨“乐都饭店”将等待收货的马五德、马洒力抓获，并当即宣布了刑事拘留。14日，那曲公安处在保证人保证并交纳保证金的情况下，对马五德、马洒力二人变更了强制措施，予以取保候审。

                    1999年8月16日，那曲公安处对马正清、马锦忠二人取保候审。2000年6月28日对二人解除取保候审。

                    1999年12月10日，那曲公安处将所扣押的黄金变卖给银行，变卖款额为3825797.47元。12月15日，将变卖黄金款额以“罚没款”名目上交那曲地区财政局。

                    法制晚报·看法新闻记者了解到，此前根据国家规定，黄金的收购和供应都实行审批制，未经审批而从事经营属于违法行为。2003后，随着国家政策调整，个人可以收购、买卖黄金。

                    18年前50多公斤黄金被扣

                    据媒体报道，1998年，甘肃省酒泉市肃北蒙古族自治县黄金公司与自然人马生福就开采金矿事宜签订《承包合同》，马生福取得该县金矿的采金权。后来，马生福与马永山等人达成口头协议，由马五德及马占奎、马永山、马小平、马超共同投资，组织民工开挖采金，共采金58000多克。

                    由于前期投入较大，企业运营期间，5人已经捉襟见肘，企业难以维系，为了发放民工工资，马永山等5人准备将上述黄金交售给央行兰州中心支行，但当时后者暂停收购。

                    5名合伙人商量后决定将黄金交售至央行拉萨中心支行。但在途经西藏那曲时，被公安处工作人员查扣。

                    决定书显示，2016年6月21日，马五德等五位赔偿请求人以刑事违法扣押为由，向赔偿义务机关那曲公安处申请赔偿，请求退还被扣押的黄金58000余克。同年7月8日，那曲公安处要求申请人补正相关材料，21日，赔偿请求人快递邮寄了《无法补正有关证明材料的情况说明》，称当时那曲公安处没有向他们送达过《扣押物品清单》、《刑事拘留通知书》、《释放证明》等文书，故无法补正。

                    而根据法律规定，作为一种强制措施的扣押黄金行为，至少必须有合法的扣押决定书和扣押清单。之后，那曲公安处在法定期限内未作出是否赔偿的决定。

                    2016年10月21日，马五德等五位赔偿请求人向西藏自治区公安厅提出复议申请。公安厅于2016年12月16日以“赔偿义务机关在办理刑事案件中，对涉案财物进行扣押、对犯罪嫌疑人采取强制措施，均符合法律规定，不属于国家赔偿范围”为由作不予赔偿决定。

                    50多公斤黄金终获1100万赔偿

                    由于不服西藏自治区公安厅作出的决定，当事人随后向西藏自治区高级人民法院赔偿委员会申请作出赔偿决定。

                    法制晚报·看法新闻记者根据决定书梳理，西藏高院赔偿委员会对该案的“申请时效”和“赔偿请求人主体资格”都予以认定。而关于“黄金数量”，赔偿委员会认为，本案中请求人申请赔偿的黄金重量是58000余克，赔偿义务机关出示的证据中，显示当年交售给银行的黄金总重量为50617.26克（净重）变卖后上交国库的总款额为3825797.47元。除此之外，双方均未再提供有价值的证据予以佐证。

                    相比之下，那曲公安处当年上交国库的黄金数量较为客观。

                    据此，赔偿委员会认为，请求人马五德等五人请求国家赔偿的理由成立，应予支持。赔偿义务机关那曲地区行政公署公安处按双方协商确定的金额即人民币1100万元给付赔偿请求人马五德马占奎、马永山、马小平、马超
                </div>
            </div>
        )
    }
}