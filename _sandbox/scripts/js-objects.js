const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",

    sections: [
        {sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTH', instructor: 'Bro T'},
        {sectionNum: 2, roomNum: 'STC 347', enrolled: 25, days: 'TTH', instructor: 'Sis A'},
    ],

    studentEnrollment: function(sectionNum, action) {
        const sectionIndex = this.sections.findIndex((section) => section.sectionNum === sectionNum
    );
    if (sectionIndex >= 0) {
            this.sections[sectionIndex].enrolled += action;
            renderSections(this.sections);
        }
    }
};

function setCourseInfo(course) {
    const CourseName = document.querySelector('#courseName');
    const CourseCode = document.querySelector('#courseCode');
    CourseName.textContent = course.name;
    CourseCode.textContent = course.code;
}

function sectionTemplate(section) {
    return `<tr>
        <td>${section.sectionNum}</td>
        <td>${section.roomNum}</td>
        <td>${section.enrolled}</td>
        <td>${section.days}</td>
        <td>${section.instructor}</td>
    </tr>`;
}

function renderSections(sections) {
    const html = sections.map(sectionTemplate);
    document.querySelector('#sections').innerHTML = html.join('');
}

document.querySelector("#enrollStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNum").value;
    aCourse.studentEnrollment(parseInt(sectionNum), 1);
});

document.querySelector("#dropStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNum").value;
    aCourse.studentEnrollment(parseInt(sectionNum), -1);
});

setCourseInfo(aCourse);
renderSections(aCourse.sections);