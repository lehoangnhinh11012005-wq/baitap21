function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const result = document.getElementById('result');

    if (!weight || !height || height <= 0) {
        result.textContent = 'Vui lòng nhập đầy đủ và đúng thông tin!';
        return;
    }

    const bmi = weight / (height * height);
    let classification = '';

    if (bmi < 18.5) {
        classification = 'Thiếu cân';
    } else if (bmi < 25) {
        classification = 'Bình thường';
    } else {
        classification = 'Thừa cân';
    }

    result.textContent = `BMI của bạn là ${bmi.toFixed(2)} - ${classification}`;
}
