export const displayCards = (pics, detail) =>
  `
    <div id="scale" class="col-lg-4 py-2"
     <div class="card d-flex flex-column justify-content-between">
      <img src="${pics}" class="card-img-top rounded" alt="fashion pic">
    
           <p class="card-text py-2 fw-bold text-secondary">${detail}</p> 

      <button type="button" class="btn btn-secondary">Know More</button>
    </div>
   </div>`;
