// Xinchao
// var do_alert = function () {
//     alert("Chào mừng bạn đến với Trang của Pháp nè");
// };
// setTimeout(do_alert, 3000);

// Load
function loadmenu() {
    var menu = [
        ["TRANG CHỦ", "index.html"],
        ["GIỚI THIỆU", "about.html"],
        ["CỬA HÀNG", "store.html"],
        ["TIN TỨC", "news.html"],
        ["TUYỂN DỤNG", "#tuyendung"],
        ["<i style='color:#19469d' class='fas fa-search'></i>", "7"],
        ["<i id='bag' style=' color: #19469d'  class='fas fa-shopping-bag'></i>", "#giohang"]
    ]
    var cd_mang = menu.length;
    var i, text_menu;
    text_menu = "<ul>";
    text_menu += "<div style='width:15%; float:left' align='left'><li><img alingn='left' src='./static/img/logo.png'></img></li></div><div style='width:85%' align='right'>";
    for (i = 0; i < cd_mang; i++) {
        text_menu += "<li><a align='right' href='" + menu[i][1] + "'>" + menu[i][0] + "</a></li>";
    }
    text_menu += "</div></ul>";
    document.getElementById('menu').innerHTML = text_menu;




}





// Phan menu ajax
// function loadDoc(pa) {

//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//             document.getElementById("noidung").innerHTML = this.responseText;
//         }
//     };
//     switch (pa) {
//         case 2:
//             xhttp.open("GET", "index.html", true);


//             break;
//         case 3:
//             xhttp.open("GET", "about.html", true);
//             break;
//         case 4:
//             xhttp.open("GET", "store.html", true);
//             break;
//         case 5:
//             xhttp.open("GET", "news.html", true);
//             break;
//         case 6:
//             xhttp.open("GET", "#lienhe", true);

//             break;
//         case 7:
//             xhttp.open("GET", "timkiem.html", true);
//             break;

//         default:
//             xhttp.open("GET", "giohang.html", true);
//             break;
//     }
//     xhttp.send();
// }


// homeslider
$('.home_slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: ['<i  class="fas fa-chevron-circle-left"></i>', '<i class="fas fa-chevron-circle-right"></i>'],
    autoplay: false,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            nav: false,
            dots: false,
        },
        576: {
            items: 1,
            nav: false,
            dots: false,
        },
        768: {
            items: 1,
            nav: false,
            dots: false,
        },
        992: {
            items: 1
        }
    }
});
// Blue-box1





// Blue-box2
var buttons = document.getElementsByClassName('tablinks');
var contents = document.getElementsByClassName('tabcontent');

function showContent(id) {
    for (var i = 0; i < contents.length; i++) {
        contents[i].style.display = 'none';
    }
    var content = document.getElementById(id);
    content.style.display = 'block';
};
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        var id = this.textContent;
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove("active");
        }
        this.className += " active";
        showContent(id);
    });
};
showContent('MEN');



// Blue-box3

// hover
function show(id) {
    document.getElementById(id).style.visibility = "visible";

};

function hide(id) {
    document.getElementById(id).style.visibility = "hidden";
};


// Blue-box4

function kiemtraGmail() {
    var gmail = document.getElementById('gmail').value;
    if (gmail == "") {
        var g = prompt("Nhập mail của bạn", '');
        alert(g);
    }
};


// BackTo
// tạo nút top
$(document).ready(function () {
    var backToTop = function () {
        var scrollTop = $(window).scrollTop();
        var screenScroll = $(window).height() / 2;
        if (scrollTop > screenScroll) {
            $('#back-to-top').addClass('show');
        } else {
            $('#back-to-top').removeClass('show');
        }
    };

    backToTop();

    $(window).on('scroll', function () {
        backToTop();
    });

    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
});


// About
// document.getElementById("detail").style.display = 'none';

function xemthem() {
    var detail = document.getElementById('detail');
    if (detail.style.display === "none") {
        detail.style.display = "block";
    } else {
        detail.style.display = "none";
    }
};

// Giohang
var shoppingCartItems = [];

$(document).ready(function () {
    // Kiểm tra nếu đã có sessionStorage["shopping-cart-items"] hay chưa?
    if (sessionStorage["shopping-cart-items"] != null) {
        shoppingCartItems = JSON.parse(sessionStorage["shopping-cart-items"].toString());
    }

    // Hiển thị thông tin từ giỏ hàng
    displayShoppingCartItems();
});

// Sự kiện click các button có class=".add-to-cart"
$(".add-to-cart").click(function () {
    var button = $(this); // Lấy đối tượng button mà người dùng click
    var id = button.attr("id"); // id của sản phẩm là id của button
    var name = button.attr("data-name"); // name của sản phẩm là thuộc tính data-name của button
    var price = button.attr("data-price"); // price của sản phẩm là thuộc tính data-price của button
    var quantity = 1; // Số lượng

    var item = {
        id: id,
        name: name,
        price: price,
        quantity: quantity
    };

    var exists = false;
    if (shoppingCartItems.length > 0) {
        $.each(shoppingCartItems, function (index, value) {
            // Nếu mặt hàng đã tồn tại trong giỏ hàng thì chỉ cần tăng số lượng mặt hàng đó trong giỏ hàng.
            if (value.id == item.id) {
                value.quantity++;
                exists = true;
                return false;
            }
        });
    }

    // Nếu mặt hàng chưa tồn tại trong giỏ hàng thì bổ sung vào mảng
    if (!exists) {
        shoppingCartItems.push(item);
    }

    // Lưu thông tin vào sessionStorage
    sessionStorage["shopping-cart-items"] = JSON.stringify(
        shoppingCartItems
    ); // Chuyển thông tin mảng shoppingCartItems sang JSON trước khi lưu vào sessionStorage
    // Gọi hàm hiển thị giỏ hàng
    displayShoppingCartItems();
});

// Xóa hết giỏ hàng shoppingCartItems
$("#button-clear").click(function () {
    shoppingCartItems = [];
    sessionStorage["shopping-cart-items"] = JSON.stringify(shoppingCartItems);
    $("#table-products > tbody").html("");
});

// Hiển thị giỏ hàng ra table
function displayShoppingCartItems() {
    if (sessionStorage["shopping-cart-items"] != null) {
        shoppingCartItems = JSON.parse(sessionStorage["shopping-cart-items"]
            .toString()); // Chuyển thông tin từ JSON trong sessionStorage sang mảng shoppingCartItems.

        $("#table-products > tbody").html("");
        // Duyệt qua mảng shoppingCartItems để append từng item dòng vào table
        $.each(shoppingCartItems, function (index, item) {
            var htmlString = "";
            htmlString += "<tr>";
            htmlString += "<td>" + item.id + "</td>";
            htmlString += "<td>" + item.name + "</td>";
            htmlString += "<td style='text-align: right'>" + item.price + "</td>";
            htmlString += "<td style='text-align: right'>" + item.quantity + "</td>";
            htmlString += "<td style='text-align: right'>" + item.price * item.quantity + "</td>";
            htmlString += "</tr>";

            $("#table-products > tbody:last").append(htmlString);

        });
    }
}

$(document).ready(function () {
    $('#name').focus(function (event) {
        $('#capname').text('Vui lòng không bỏ trống phần này tao buồn đấy');
        $(this).addClass('capname');
    });
    $('#name').change(function (event) {
        $('#capname').text('');
        $(this).removeClass('capname');
    });
    $('#dangky').click(function (event) {
        var ketqua = $('#name').val();
        $('#ketqua').text('Họ và tên: ' + ketqua)

    });
});
$(document).ready(function () {
    $('#address').focus(function (event) {
        $('#capaddress').text('Vui lòng không bỏ trống phần này tao buồn đấy');
        $(this).addClass('capname');
    });
    $('#address').change(function (event) {
        $('#capaddress').text('');
        $(this).removeClass('capname');
    });
    $('#dangky').click(function (event) {
        var ketqua1 = $('#address').val();
        $('#ketqua1').text('Địa chỉ của bạn: ' + ketqua1)

    });
});
$(document).ready(function () {
    $('#tel').focus(function (event) {
        $('#captel').text('Vui lòng không bỏ trống phần này tao buồn đấy');
        $(this).addClass('capname');
    });
    $('#tel').change(function (event) {
        $('#captel').text('');
        $(this).removeClass('capname');
    });
    $('#dangky').click(function (event) {
        var ketqua2 = $('#tel').val();
        $('#ketqua2').text('Số điện thoại: ' + ketqua2)

    });
});
$(document).ready(function () {
    $('#gmail').focus(function (event) {
        $('#capgmail').text('Vui lòng không bỏ trống phần này tao buồn đấy');
        $(this).addClass('capname');
    });
    $('#gmail').change(function (event) {
        $('#capgmail').text('');
        $(this).removeClass('capname');
    });
    $('#dangky').click(function (event) {
        var ketqua3 = $('#gmail').val();
        $('#ketqua3').text('Gmail của bạn: ' + ketqua3)

    });
});