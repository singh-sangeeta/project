let btnmarketing = document.querySelector('#btnmarketing');
let buisness = document.querySelector('#buisness');
let finance = document.querySelector('#finance');
let content = document.querySelector('#content');
let paragraph = document.querySelector('p');

btnmarketing.addEventListener('click', () => {
    content.innerHTML =' <p  style="color:black;font-size: larger; margin-top: 20px;">From banking and insurance to wealth management and securities<br/> distribution, company dedicated financial services teams serve all major<br/> sectors of the industry. Our work draws on more than 15 years of <br/>experience, delivered by 5,700 professionals. </p>'; 
});
buisness.addEventListener('click', () => {
    content.innerHTML = ' <p style="color:black;font-size: larger; margin-top: 20px;">Among the important considerations in the deal: strategically using the <br/>deal to reinforce both companies’research and development (R&D) <br/>capabilities for new products. Fosun provided resources (financial and <br/> clinical trial bases) to Ambrx for R&D while also benefiting from its affiliation <br/>with Ambrx through capabilitysharing. </p>';
});
finance.addEventListener('click', () => {
    content.innerHTML =' <p style="color:black;font-size: larger; margin-top: 20px;"> From banking and insurance to wealth management and securities<br/> distribution, company dedicated financial services teams serve all major<br/> sectors of the industry. Our work draws on more than 15 years of<br/> experience, delivered by 5,700 professionals. </p>';
});