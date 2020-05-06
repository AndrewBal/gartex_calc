$(document).ready(function () {

    let ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'models.json');
    ourRequest.onload = function () {
        let ourData = ourRequest.responseText;
        let obj = JSON.parse(ourData);
        let model = {
            diameter,
            length,
            type: "",
            price: "",
            material: "",
            weight: "",
            protection: "",
            image: ''
        };
        let totalPrice;
        let materialLock;
        let weightChain;
        let selectLenght;
        let selectDiameter;
        let protectionLevel;
        let modelImage = document.getElementById('model-image');


        function writeRes() {
            totalPrice = document.getElementById('total-price').innerHTML = model.price;
            materialLock = document.getElementById('material-lock').innerHTML = model.material;
            weightChain = document.getElementById('weight-chain').innerHTML = model.weight;
            selectLenght = document.getElementById('length-chain').innerHTML = model.length;
            selectDiameter = document.getElementById('diameter-chain').innerHTML = model.diameter;
            protectionLevel = document.getElementById('protection-level').innerHTML = model.protection;
            modelImage.src = model.image;

            let lockText;
            if (model.type === "4") {
                lockText = document.getElementById('lock-text').innerHTML = "";
            }

            else {
                lockText = document.getElementById('lock-text').innerHTML = "Замок";
            }

        }
        function toResult() {
            for (var index = 0; index < obj.length; index++) {
                let object = obj[index];
                if (object.length === model.length && object.diameter === model.diameter && object.type === model.type) {
                    model.price = object.price;
                    model.material = object.material;
                    model.weight = object.weight;
                    model.length = object.length;
                    model.diameter = object.diameter;
                    model.protection = object.protection;
                    model.image = object.image;
                }
            }

        }
        function getRadioBtn() {
            var rad = document.getElementsByName('lock');
            for (var i = 0; i < rad.length; i++) {
                if (rad[i].checked) {
                    model.type = ('' + i + '');
                }
            }

        }





        document.querySelector('select#ulock').addEventListener("change", function () {
            var selectUlock = (this).value;
            var priceUlock;
            var imageUlock = document.getElementById('ulock-image');
            if (selectUlock == '2') {
                priceUlock = document.getElementById('ulock-price').innerHTML = "596";
                imageUlock.src = 'img/U-lock-02.png'
            }
            else {
                priceUlock = document.getElementById('ulock-price').innerHTML = "498";
                imageUlock.src = 'img/U-lock.png'
            }
        });

        model.diameter = parseInt(document.querySelector('select#diameter').value);
        model.length = parseInt(document.querySelector('select#length').value);
        getRadioBtn();
        toResult();
        writeRes();


        document.querySelector('select#diameter').addEventListener("change", function () {
            model.diameter = parseInt((this).value);
            let img1 = document.getElementById('001')
            let img4 = document.getElementById('004')
            if (model.diameter == 8) {
                img1.classList.add('filter');
                img4.classList.remove('filter');
                document.getElementById('type-lock-1').disabled = true;
                document.getElementById('type-lock-4').disabled = false;
            } else {
                img1.classList.remove('filter');
                img4.classList.add('filter');
                document.getElementById('type-lock-1').disabled = false;
                document.getElementById('type-lock-4').disabled = true;
            }
            toResult();
            writeRes();

        });

        document.querySelector('select#length').addEventListener("change", function () {
            model.length = parseInt((this).value);
            toResult();
            writeRes();

        });
        document.querySelector('form#select-type').onclick = function (e) {
            getRadioBtn();
            toResult();
            writeRes();

        };

    };
    ourRequest.send();


});


