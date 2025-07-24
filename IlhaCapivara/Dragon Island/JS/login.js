let questiontxt1 = document.getElementById("loginquestionOne")
let questionTxt1Label = document.getElementById("loginquestLabel")
let questionbtt1 = document.getElementById("logQuestOneCalcButton")

questionbtt1.addEventListener('click', questTaskAge);
questiontxt1.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("logQuestOneCalcButton").click();
    }
    else (event.key != "Enter") ; {
        questionTxt1Label.innerHTML = "Qual seu aniversário? [dd/mm/yyyy] Você escreveu "+(((questiontxt1.value).length)+1)+" caractéres! E a última tecla pressionada foi: "+event.key+"!";
    }
});

function questTaskAge() {
    const birthdate = (questiontxt1.value).split( "/" )
    let birthdateDay = Number(birthdate[0])
    let birthdateMonth = Number(birthdate[1])
    let birthdateYear = Number(birthdate[2])
    
    var daysFromBirthDays = birthdateDay
    var daysFromBirthMonths = (birthdateMonth - 1) * 30
    var daysFromBirthInBirthYear = 366 - (daysFromBirthDays + daysFromBirthMonths)

    var todaydate = new Date()
    var todayDay = Number(todaydate.getDate())
    var todayMonth = Number(todaydate.getMonth())
    var todayYear = Number(todaydate.getFullYear())

    var daysBirthToDayYear = (((todayYear - birthdateYear) - 2 ) * 365) + daysFromBirthInBirthYear
    var daysBirthToDayMonth = ((todayMonth - 1) * 30) + daysBirthToDayYear
    var daysBirthToDayDayTotal = (daysBirthToDayMonth + todayDay)

    var expectedfulldays = 32902
    var expectedDaysLeft = expectedfulldays - daysBirthToDayDayTotal

    alert("Você já viveu aproximadamente "+daysBirthToDayDayTotal+" dias! Parabéns! Ah, aliás, se você viver até os 90 anos só te faltam "+expectedDaysLeft+" dias até...")
}