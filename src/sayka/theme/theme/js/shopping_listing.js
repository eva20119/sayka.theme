$(function(){
    $('.cart-btn').click(function(e){
        e.preventDefault();
        item_id = $(this).data('item_id')
        item_url = $(this).data('item_url')
        if(item_url){
            url = item_url + '/@@cart_update'
        }else{
            url = location.href.replace('shopping_listing', 'cart_update')
        }
        data = {
            'item_id': item_id,
            'action': 'add'
        }
        $.ajax({
            type: "post",
            url: url,
            data: data,
            success: function (response) {
                if(response == 'Add Success'){
                    itemCart.add(item_id)
notify({
        type: "success", //alert | success | error | warning | info
        title: "新增商品成功",
        position: {
            x: "right", //right | left | center
            y: "bottom" //top | bottom | center
        },
       
        size: "normal", //normal | full | small
        overlay: false, //true | false
        closeBtn: true, //true | false
        overflowHide: false, //true | false
        spacing: 20, //number px
        theme: "default", //default | dark-theme
        autoHide: true, //true | false
        delay: 3000, //number ms
        template: '<div class="notify"><div class="notify-text"></div></div>'
    });
                }else if(response == 'Item exist'){
notify({
        type: "warning", //alert | success | error | warning | info
        title: "商品以再購物車內",
        position: {
            x: "right", //right | left | center
            y: "bottom" //top | bottom | center
        },
       
        size: "normal", //normal | full | small
        overlay: false, //true | false
        closeBtn: true, //true | false
        overflowHide: false, //true | false
        spacing: 20, //number px
        theme: "default", //default | dark-theme
        autoHide: true, //true | false
        delay: 3000, //number ms
        template: '<div class="notify"><div class="notify-text"></div></div>'
    });
                }
            }
        });
    })
})
