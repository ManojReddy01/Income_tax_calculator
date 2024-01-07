function calculateTax() {
    const income = parseInt(document.getElementById('income').value);
    
    if (!isNaN(income) && income > 0) {
        const taxRate1 = 0.1;
        const taxRate2 = 0.2;
        const taxRate3 = 0.35;

        let final, grossIncome, netIncome;

        if (income <= 500000) {
            final = income - (income * taxRate1);
            grossIncome = income;
            netIncome = final;
            notice="Notice! your income range fall under first range with rate of 10% !"
            information="Probably your income is less than 500000!"
        } else if (income > 500000 && income <= 800000) {
            const tax1 = 500000 * taxRate1;
            const taxableIncome = income - 500000;
            const tax2 = taxableIncome * taxRate2;
            final = income - tax1 - tax2;
            grossIncome = income;
            netIncome = final;
            notice="Notice! your income range fall under second range with a rate of 10%,20% combined!"
            information="probably your income lies in range of 500001 to 800000!"
        } else if (income > 800000) {
            const tax1 = 500000 * taxRate1;
            const tax2 = 300000 * taxRate2;
            const taxableIncome = income - 800000;
            const tax3 = taxableIncome * taxRate3;
            final = income - tax1 - tax2 - tax3;
            grossIncome = income;
            netIncome = final;
            notice="Notice! your income fall under third range with a rate of 10%,20%,35% combined!"
            information="probably your income greater than 800000!"
        }

        document.getElementById('grossIncome').textContent = grossIncome.toFixed(2);
        document.getElementById('netIncome').textContent = netIncome.toFixed(2);
        document.getElementById("notice").textContent=notice;
        document.getElementById("information").textContent=information;
    } else {
        alert('Please enter a valid positive number for income.');
    }
}
