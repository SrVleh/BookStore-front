import CreateOrderService from "../services/shopping/CreateOrderService.js";
import GetOrderedBooksService from "../services/shopping/GetOrderedBooksService.js";

class OrdersController {
    static CreateNewOrder() {
        return CreateOrderService.Call()
    }

    static GetOrderedBooks() {
        return GetOrderedBooksService.Call()
    }
}

export default OrdersController