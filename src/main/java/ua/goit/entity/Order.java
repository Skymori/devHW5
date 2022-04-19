package ua.goit.entity;

import com.google.gson.annotations.SerializedName;

import java.util.Objects;

public class Order {
    @SerializedName("id")
    private int id;
    @SerializedName("petId")
    private int petId;
    @SerializedName("quantity")
    private int quantity;
    @SerializedName("shipDate")
    private String shipDate;
    @SerializedName("status")
    private OrderStatus status;
    @SerializedName("complete")
    private boolean complete;

    public Order(int orderId, int petId, int quantity, String shipDate, OrderStatus status, boolean complete) {
        this.id = orderId;
        this.petId = petId;
        this.quantity = quantity;
        this.shipDate = shipDate;
        this.status = status;
        this.complete = complete;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getPetId() {
        return petId;
    }

    public void setPetId(int petId) {
        this.petId = petId;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public String getShipDate() {
        return shipDate;
    }

    public void setShipDate(String shipDate) {
        this.shipDate = shipDate;
    }

    public OrderStatus getStatus() {
        return status;
    }

    public void setStatus(OrderStatus status) {
        this.status = status;
    }

    public boolean isComplete() {
        return complete;
    }

    public void setComplete(boolean complete) {
        this.complete = complete;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Order)) return false;
        Order order = (Order) o;
        return getId() == order.getId() && getPetId() == order.getPetId() && getQuantity() == order.getQuantity() && isComplete() == order.isComplete() && Objects.equals(getShipDate(), order.getShipDate()) && getStatus() == order.getStatus();
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getPetId(), getQuantity(), getShipDate(), getStatus(), isComplete());
    }

    @Override
    public String toString() {
        return "Order{" +
                "orderId=" + id +
                ", petId=" + petId +
                ", quantity=" + quantity +
                ", shipDate='" + shipDate + '\'' +
                ", status=" + status +
                ", complete=" + complete +
                '}';
    }
}
