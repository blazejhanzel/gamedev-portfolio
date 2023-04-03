import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData("project-1", "Optimistic Chubby", "img/projects/project-1-icon.png", 
    `
    <div class="paragraph">
     <strong>Optimistic Chubby</strong> is a thing of beauty that I am so proud of. It's available on Android because why not.
     <br/>Image by <a href="https://www.pexels.com/fr-fr/@knownasovan" target="_blank">OVAN</a>.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="paragraph center">
        <a href="https://play.google.com/store/apps/details?id=some.playstore.thing" target="_blank"><img src="img/projects/play-store-logo.png" alt="Play Store badge" /></a>
    </div>

    <div class="paragraph">
        Main features :
        <ul>
        <li>Some stuff</li>
        <li>Some great stuff</li>
        <li>More awesome stuff</li>
        <li>And then some</li>
        </ul>
    </div>

    <div class="paragraph center">
        <img class="phone-screenshot" src="https://fakeimg.pl/300x534/" alt="Optimistic Chubby Screenshot" />
        <img class="phone-screenshot" src="https://fakeimg.pl/300x534/" alt="Optimistic Chubby Screenshot" />
    </div>
    `, "#23bd69", true),
];