
const navigationDotActiveSvg = "src/completed-projects/completed-projects__dot_white.svg";
const navigationDotInactiveSvg = "src/completed-projects/completed-projects__dot_gray.svg";
const completedProjectDescriptions = [
    {
        textDescription: "Only a small part of the work performed by our company is presented<br>on the site. For 14 years on in the construction<br>market we have made happy more than 1000 families",
        textCity: "Rostov-on-Don<br>LCD admiral",
        textApartmentArea: "81 m2",
        textRepairTime: "3.5 months",
        textRepairCost: "Upon request",
        imgPath: "src/completed-projects/completed-projects__image1.png",
        buttonTitle: "Rostov-on-Don, Admiral",
    },
    {
        textDescription: "Only a small part of the work performed by our company is presented<br>on the site. For 14 years on in the construction<br>market we have made happy more than 1000 families",
        textCity: "Sochi<br>Thieves",
        textApartmentArea: "105 m2",
        textRepairTime: "4 months",
        textRepairCost: "Upon request",
        imgPath: "src/completed-projects/completed-projects__image2.png",
        buttonTitle: "Sochi Thieves",
    },
    {
        textDescription: "Only a small part of the work performed by our company is presented<br>on the site. For 14 years on in the construction<br>market we have made happy more than 1000 families",
        textCity: "Rostov-on-Don<br>Patriotic",
        textApartmentArea: "93 m2",
        textRepairTime: "3 months",
        textRepairCost: "Upon request",
        imgPath: "src/completed-projects/completed-projects__image3.png",
        buttonTitle: "Rostov-on-Don Patriotic",
    }
];

const imageObj = document.querySelector(
    ".completed-projects__image");
const navigationDots = document.querySelectorAll(
    '.completed-projects__navigation-dot');
const navigationTitles = document.querySelectorAll(
    '.completed-projects__span');
const textItems = document.querySelectorAll(
    '.completed-projects__text');
const prev = document.querySelector(
    '.item-previous');
const next = document.querySelector(
    '.item-next');

let currentIndex = 0;
const switchCompletedProject = indexInArray => {
    indexInArray = indexInArray < 0 
                    ? (completedProjectDescriptions.length - 1) 
                    : indexInArray;
    indexInArray = indexInArray >= completedProjectDescriptions.length 
                    ? 0
                    : indexInArray;

    navigationTitles[currentIndex].classList.remove(
                        "completed-projects__span_active");
    navigationDots[currentIndex].src = navigationDotInactiveSvg;
    currentIndex = indexInArray;
    
    imageObj.src = completedProjectDescriptions[currentIndex].imgPath;
    navigationDots[currentIndex].src = navigationDotActiveSvg;
    navigationTitles[currentIndex].classList.add(
                        "completed-projects__span_active");
    const projectsValues = Object.values(
                            completedProjectDescriptions[currentIndex]);
    textItems.forEach((item, index) => {
        item.innerHTML = projectsValues[index];
    });
};
switchCompletedProject(0);

prev.addEventListener('click', () => {
    switchCompletedProject(currentIndex - 1);
});
next.addEventListener('click', () => {
    switchCompletedProject(currentIndex + 1);
});

const navigationInit = (item, index) => {
    item.addEventListener('click', () => {
        switchCompletedProject(index);
    });
};

navigationDots.forEach(navigationInit);
navigationTitles.forEach(navigationInit);


