<template>
    <div class="page-container">
        <div class="edit-book-section">
            <h1>Edit book</h1>
            <input class="custom-input" type="text" placeholder="Title">
            <input class="custom-input" type="text" placeholder="Author">
            <input class="custom-input" type="text" placeholder="Price">
            <input class="custom-input" type="url" placeholder="Image url">
            <div class="actions-container">
                <button class="custom-btn">Confirm</button>
                <button class="custom-btn cancel">Cancel</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "EditBook"
}
</script>

<style scoped lang="scss">
    .edit-book-section {
        display: flex;
        flex-direction: column;
        place-items: center;
        gap: 2rem;
        width: 100%;

        .actions-container {
            display: flex;
            justify-content: space-between;
            gap: 2rem;
            width: 35%;
        }
    }
</style>