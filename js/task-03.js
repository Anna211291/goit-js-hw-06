const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const gallery = document.querySelector(".gallery");

function galleryList(arr) {
  const image = arr.flatMap(({ url, alt }) => {
    const li = `<li><img class="img-item" width="450" src="${url}" alt="${alt}"></li>`;
    return li;
  }).join("");
  gallery.insertAdjacentHTML("afterbegin", image);
}

galleryList(images);

// const galleryArr = [];


// images.flatMap((image) => {
//   const li = `<li><img class="img-item" width="450" src="${image.url}" alt="${image.alt}"></li>`;
//   galleryArr.push(li);

// })

// gallery.insertAdjacentHTML("afterbegin", galleryArr);

gallery.style.display = 'flex'
gallery.style.flexDirection = 'row'
gallery.style.flexWrap = 'wrap'
gallery.style.gap = '40px'
gallery.style.listStyle = 'none'
gallery.style.padding = '26px'







