import {Avatar, Button, Card, CardBody, CardFooter, CardHeader} from "@nextui-org/react";

export default function GiftList({giftListData, listType,buttonAction=()=>''}) {

    const ActButton = ({item}) => {
        let theKey;
        let trueText = '',falseText='';
        if (listType === "getGift") {
            theKey = item.remained !== 0;
            trueText="兑换";
            falseText="售罄";
        }else if  (listType === "checkGift") {
            theKey = item.isShow === 0;
            trueText="上架";
            falseText="下架";
        }
        return (
            <Button
                onClick={()=>buttonAction(item,theKey)}
                className={theKey ? "" : "bg-transparent text-foreground border-default-200"}
                color="primary"
                radius="full"
                size="sm"
                variant={theKey ? "solid" : "bordered"}>
                {theKey ? trueText : falseText}
            </Button>
        )
    }

    return (
        <div className={"p-5"}>
            {giftListData.map((item, index) => (
                <Card className="mb-5" key={item.giftId}>
                    <CardHeader className="justify-between">
                        <div className="flex gap-5">
                            <Avatar isBordered radius="full" size="md" src={item.giftImg}/>
                            <div className="flex flex-col gap-1 items-start justify-center">
                                <h4 className="text-small font-semibold leading-none text-default-600">{item.giftName}</h4>
                                <h5 className="text-small tracking-tight text-default-400">需要积分：{item.needScore}</h5>
                            </div>
                        </div>
                        <ActButton item={item}></ActButton>
                    </CardHeader>
                    <CardBody className="px-3 py-0 text-small text-default-400">
                        <p>
                            {item.giftDetail}
                        </p>
                    </CardBody>
                    <CardFooter className="gap-3">
                        <div className="flex gap-1">
                            <p className="font-semibold text-default-400 text-small">库存：</p>
                            <p className=" text-default-400 text-small">{item.remained}</p>
                        </div>
                        <div className="flex gap-1">
                            <p className="font-semibold text-default-400 text-small">已售：</p>
                            <p className="text-default-400 text-small">{item.redeemed}</p>
                        </div>
                    </CardFooter>
                </Card>
            ))}
        </div>
    )
}