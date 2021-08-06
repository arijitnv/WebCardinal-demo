const { WebcController } = WebCardinal.controllers;

const model = {
    orderId: {
        label: "Order Id",
        name: "Order Id",
        id: "orderId",
        placeholder: "Enter Order Id",
        value: ''
    },
    sponsorId: {
        label: "Sponsor Id",
        name: "Sponsor Id",
        id: "sponsorId",
        placeholder: "Enter Sponsor Id",
        value: ''
    },
    studyId: {
        label: "Study Id",
        name: "Study Id",
        id: "studyId",
        placeholder: "Enter Study Id",
        value: ''
    },
    cmoId: {
        label: "CMO Id",
        name: "CMO Id",
        id: "cmoId",
        placeholder: "Enter cmo Id",
        value: ''
    },
    siteId: {
        label: "Site Id",
        name: "Site Id",
        id: "siteId",
        placeholder: "Enter site Id",
        value: ''
    },
    orderList: []
};

export default class OrderController extends WebcController {
    constructor(element, history) {
        super(element, history);

        this.setModel(JSON.parse(JSON.stringify(model)));

        var flag = null;
        var orders = localStorage.getItem("Orders");

        if (orders != null) {
            this.model.orderList = JSON.parse(orders);
        }

        this.onTagClick("submit", () => {

            let orderDetails = {
                orderId: this.model.orderId.value,
                sponsorId: this.model.sponsorId.value,
                studyId: this.model.studyId.value,
                cmoId: this.model.cmoId.value,
                siteId: this.model.siteId.value,
            }
           
            if (flag == null) {
                this.model.orderList.push(orderDetails);
                localStorage.setItem("Orders",JSON.stringify(this.model.orderList));
            }
            else if (flag == "edit") {
                console.log("Inside edit");
                updateRecord(orderDetails);
            }

            reset.bind(this)();
        });

        this.onTagClick("edit", (rowModel) => {
            this.model.orderId.value = rowModel.orderId;
            this.model.sponsorId.value = rowModel.sponsorId;
            this.model.studyId.value = rowModel.studyId;
            this.model.cmoId.value = rowModel.cmoId;
            this.model.siteId.value = rowModel.siteId;

            flag = "edit";
        });

        this.onTagClick("delete", (rowModel) => {
            var orders = JSON.parse(localStorage.getItem("Orders"));
            for (let i = 0; i < orders.length; i++) {
                if (orders[i].orderId == rowModel.orderId) {
                   this.model.orderList.splice(i, 1);
                    break;
                }
            }
            localStorage.setItem("Orders", JSON.stringify(this.model.orderList));

            flag = "delete";
        });

        function updateRecord(data) {
            var orders = JSON.parse(localStorage.getItem("Orders"));
            for (let i = 0; i < orders.length; i++) {
                if (orders[i].orderId == data.orderId) {
                    orders[i].sponsorId = data.sponsorId;
                    orders[i].studyId = data.studyId;
                    orders[i].cmoId = data.cmoId;
                    orders[i].siteId = data.siteId;
                    break;
                }
            }
            localStorage.setItem("Orders", JSON.stringify(orders));
        }

        function reset() {
            this.model.orderId.value = '';
            this.model.sponsorId.value = '';
            this.model.studyId.value = '';
            this.model.cmoId.value = '';
            this.model.siteId.value = '';
        }
    }
}