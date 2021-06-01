const Jobs = {
    MARE_NOSTRUM: '<h4>Cross-Platform App Dev Student <a href="https://portal.edu.gva.es/iesmarenostrum/es/centre/">@ IES Mare Nostrum</a></h4><h5>Sep 2019 - Present</h5><br><p>→ OOP (Java/C#, Netbeans/IntelliJ/Visual Studio)<br><br>→ Database design/implementation (Microsoft SQL Server 2017), Data Access<br><br>→ ERPs & CRMs<br><br>→ Work in a web app prototype to read/write books online (Node.js/Express/React)</p>',
    VSN: '<h4>Student Intern <a href="https://www.vsn-tv.com/en/">@ Video Stream Networks</a></h4><h5>Oct 2018 - Dec 2018, Mar 2021 - Jun 2021</h5><br><p>→ Debug code for a online video editor platform (TypeScript/React)<br><br>→ System setup (Windows Server 2016, Active Directory, Microservice setup, SQL Server...)<br><br>→ Work in a video file testing project with custom user config (C#, .NET)<br><br>→ Enjoy daily meetings with experienced software engineers</p>'
};
const unselectJobs = () => document.getElementsByClassName('selected-job')[0].classList.remove('selected-job');
const selectJob = (job) => {
    document.getElementById(job).classList.add('selected-job');
}
const unselectAnchors = () => document.getElementsByClassName('anchor-cur')[0].classList.remove('anchor-cur');
const selectAnchor = (anchor) => {
    document.getElementById(anchor).classList.add('anchor-cur');
}
document.getElementById('mare-nostrum').addEventListener('click', () => {
    unselectJobs();
    selectJob('mare-nostrum');
    document.getElementById('job-displayer').style.opacity = 0;
    const t = setInterval(() => {
        document.getElementById('job-displayer').innerHTML = Jobs.MARE_NOSTRUM;
        document.getElementById('job-displayer').style.opacity = 1;
        clearInterval(t);
    }, 500);
});
document.getElementById('vsn').addEventListener('click', () => {
    unselectJobs();
    selectJob('vsn');
    const t = setInterval(() => {
        document.getElementById('job-displayer').innerHTML = Jobs.VSN;
        document.getElementById('job-displayer').style.opacity = 1;
        clearInterval(t);
    }, 500);
    document.getElementById('job-displayer').style.opacity = 0;
});
window.addEventListener("scroll", (event) => {
    const scroll = this.scrollY;
    if (scroll < 500) {
        unselectAnchors();
        selectAnchor('anchor-who');
    }
    if (scroll >= 500 && scroll < 800) {
        unselectAnchors();
        selectAnchor('anchor-exp');
    }
    if (scroll >= 800 && scroll < 1700) {
        unselectAnchors();
        selectAnchor('anchor-pro');
    }
    if (scroll >= 1700) {
        unselectAnchors();
        selectAnchor('anchor-con');
    }
});
document.getElementById('mail-button').addEventListener('click', () => window.open('mailto:alvaro3chess@gmail.com'));
document.getElementById('see-button').addEventListener('click', () => window.open('https://github.com/Forensor'));
document.getElementById('resume-button').addEventListener('click', () => window.open('./resume.pdf'));
document.getElementById('job-displayer').innerHTML = Jobs.VSN;