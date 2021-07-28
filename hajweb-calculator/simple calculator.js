
        var inner = document.getElementById("innerhtml");
        function sum() {
            var n1 = document.getElementById("n1").value;
            var n2 = document.getElementById("n2").value;

            n1 = parseInt(n1);
            n2 = parseInt(n2);

            var sum = n1 + n2;
            inner.innerHTML=sum;
        };
        function sum2() {
            var n1 = document.getElementById("n1").value;
            var n2 = document.getElementById("n2").value;

            n1 = parseInt(n1);
            n2 = parseInt(n2);

            var sum = n1 - n2;
            inner.innerHTML=sum;
        };
        function sum3() {
            var n1 = document.getElementById("n1").value;
            var n2 = document.getElementById("n2").value;

            n1 = parseInt(n1);
            n2 = parseInt(n2);

            var sum = n1 * n2;
            inner.innerHTML=sum;
        };
        function sum4() {
            var n1 = document.getElementById("n1").value;
            var n2 = document.getElementById("n2").value;

            n1 = parseInt(n1);
            n2 = parseInt(n2);

            var sum = n1 / n2;
            inner.innerHTML=sum;
        };
