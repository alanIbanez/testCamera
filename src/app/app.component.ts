import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'camera';
  status: any;
  isStream: any | null;
  stream: any | null;
  video: HTMLVideoElement | null | undefined;
  prueba(): void {
    try {
      navigator.mediaDevices.getUserMedia({
        audio: false,
        video: true
      }).then((res) => {
        this.status = 'Accesiendo a la camara'
        this.stream = res;
         (document.querySelector('video') as HTMLMediaElement).srcObject= this.stream;
      }).catch(err => {
        this.status = err;
        if (err?.message === 'Permission denied') {
          this.status = 'Permiso denegado, porfavor autoriza para acceder a la camara';
        } else {
          this.status = 'Puede que no tengas acceso a la camara, intenta de nuevo';
        }
      })
    } catch (error) {
      console.error(error)
    }
  }

  /*prueba2(): void {
    document.querySelector('#get-access')?.addEventListener('click', async function init(e) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: false,
          video: true
        })
        const videoTracks = stream.getVideoTracks()
        const track = videoTracks[0]
        alert(track)
        document.querySelector('video').srcObject = stream
        //document.querySelector('#get-access').setAttribute('hidden', true)
    //The video stream is stopped by track.stop() after 3 second of playback.
        setTimeout(() => { track.stop() }, 3 * 1000)
      } catch (error) {
        alert(error)
        console.error(error)
      }
    })
  }*/
}
