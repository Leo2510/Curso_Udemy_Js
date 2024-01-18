
        function clearDisplay() {
            document.getElementById('display').value = '';
        }

        function appendToDisplay(value) {
            document.getElementById('display').value += value;
        }

        function calculate() {
            try {
                document.getElementById('display').value = eval(document.getElementById('display').value);
            } catch (error) {
                document.getElementById('display').value = 'Error';
            }
        }

        function calculateSine() {
            const inputValue = parseFloat(document.getElementById('display').value);
            document.getElementById('display').value = Math.sin(inputValue);
        }

        function calculateCosine() {
            const inputValue = parseFloat(document.getElementById('display').value);
            document.getElementById('display').value = Math.cos(inputValue);
        }

        function calculateSquareRoot() {
            const inputValue = parseFloat(document.getElementById('display').value);
            document.getElementById('display').value = Math.sqrt(inputValue);
        }
