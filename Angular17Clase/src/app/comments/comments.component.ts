import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [],
  template: `
    <h3>Comentarios de lo que sea</h3>
    <img src="https://img.rtve.es/imagenes/this-is-fine-meme-fatiga-pandemica/1614352806474.png" />
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ipsam nulla voluptates fugiat unde 
      laboriosam doloremque laudantium eum nostrum natus eaque, distinctio voluptas quae laborum possimus autem neque cumque numquam.
    </p>
  `,
  styles: `
    img{
      width: 100%;
      height: auto;
    }
  `,
})
export class CommentsComponent {

}
