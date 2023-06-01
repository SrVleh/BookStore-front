import CreateOrderService from "../services/shopping/CreateOrderService.js";
import GetOrderedBooksService from "../services/shopping/GetOrderedBooksService.js";
import CheckOngoingOrderService from "../services/shopping/CheckOngoingOrderService.js";
import CompleteOngoingOrderService from "../services/shopping/CompleteOngoingOrderService.js";
import AddBooksToOrderService from "../services/shopping/AddBooksToOrderService.js";
import DeleteOrderService from "../services/shopping/DeleteOrderService.js";
import GetOrderListService from "../services/shopping/GetOrderListService.js";
import GetCurrentOrdersService from "../services/shopping/GetCurrentOrdersService.js";

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

    static CompleteOngoingOrder(order) {
        return CompleteOngoingOrderService.Call(order)
    }

    static AddBooksToOrder(ongoing_order, book, quantity) {
        return AddBooksToOrderService.Call(ongoing_order, book, quantity)
    }

    static DeleteOrder(id) {
        return DeleteOrderService.Call(id)
    }

    static GetOrderList() {
        return GetOrderListService.Call()
    }

    static GetCurrentOrders() {
        return GetCurrentOrdersService.Call()
    }
}

export default OrdersController