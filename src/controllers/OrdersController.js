import CreateOrderService from "../services/shopping/CreateOrderService.js";
import GetOrderedBooksService from "../services/shopping/GetOrderedBooksService.js";
import CheckOngoingOrderService from "../services/shopping/CheckOngoingOrderService.js";
import CompleteOngoingOrderService from "../services/shopping/CompleteOngoingOrderService.js";
import AddBooksToOrderService from "../services/shopping/AddBooksToOrderService.js";

class OrdersController {
    static CreateNewOrder() {
        return CreateOrderService.Call()
    }

    static GetOrderedBooks() {
        return GetOrderedBooksService.Call()
    }

    static CheckOngoingOrder() {
        return CheckOngoingOrderService.Call()
    }

    static CompleteOngoingOrder() {
        return CompleteOngoingOrderService.Call()
    }

    static AddBooksToOrder(book, quantity) {
        return AddBooksToOrderService.Call(book, quantity)
    }
}

export default OrdersController