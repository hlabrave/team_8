/* staff section dynmically */

const items = [
  {
    profilePic: 'img/mutagoma.jpg',
    name: 'MUTAGOMA Patience',
    jobDescr: 'Co-founder of Love in Action ',
    comment: 'Person more about that person more about that person more about that person',
  },
  {
    profilePic: 'img/hirwa.jpg',
    name: 'La Brave Hirwa',
    jobDescr: 'Founder of Love in Action',
    comment: 'Person more about that person more about that person more about that person',
  },
  {
    profilePic: 'img/franco.jpg',
    name: 'Franco MUSHASHI',
    jobDescr: 'Secretary of Love in Action',
    comment: 'Person more about that person more about that person more about that person',
  },
  {
    profilePic: 'img/cynthia.jpg',
    name: 'Cynthia INEZA',
    jobDescr: 'Finance Manager in Action', 
    comment: 'Person more about that person more about that person more about that person',
  },
  {
    profilePic: 'img/tara.jpg',
    name: 'Tara IGIRANEZA',
    jobDescr: 'Corporate Director in Action',
    comment: 'Person more about that person more about that person more about that person',
  },
  {
    profilePic: 'img/bernice.jpg',
    name: 'Bernice ',
    jobDescr: 'Cordinate Manager in Action',
    comment: 'Person more about that person more about that person more about that person',
  },
];

for (let i = 0; i < items.length; i += 1) {
  const data = document.createElement('div');
  data.classList.add('staff-items');
  data.innerHTML = `
  <div class="staff-item">
  <div class="staff-img">
        <img src="img/checkerboard-squares-black-white.svg" alt="back" class="back"/> 
        <img src="${items[i].profilePic}" alt="staff" class="profile"/> 
      </div>
      <div class="staff-info">
      <h2>${items[i].name}</h2>
      <i class="job">${items[i].jobDescr}</i>
      <span></span>
      <p>${items[i].comment}</p>
    </div>
</div>
  `;

  document.querySelector('.staff-members').appendChild(data);
}
