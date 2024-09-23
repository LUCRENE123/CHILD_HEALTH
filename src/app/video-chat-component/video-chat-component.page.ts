import { Component, OnInit } from '@angular/core';
import Peer from 'peerjs';

@Component({
  selector: 'app-video-chat',
  templateUrl:'./video-chat-component.page.html',
  styleUrls: ['./video-chat-component.page.scss'],
})
export class VideoChatComponentPage implements OnInit {
  private peer!: Peer;
   localStream!: MediaStream;
   remoteStream!: MediaStream;

  constructor() {}

  ngOnInit() {
    this.initializePeer();
  }

  initializePeer() {
    this.peer = new Peer(); // Initialiser PeerJS
    this.peer.on('open', (id) => {
      console.log('Connected with ID:', id);
    });
  }

  async startCall() {
    try {
      this.localStream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });

      const call = this.peer.call('remote-peer-id', this.localStream); // Remplacez 'remote-peer-id' par l'ID du pair distant

      call.on('stream', (stream) => {
        this.remoteStream = stream; // Récupérer le flux vidéo du pair distant
      });
    } catch (error) {
      console.error('Erreur lors du démarrage de l\'appel :', error);
    }
  }

  async joinCall() {
    try {
      this.localStream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });

      this.peer.on('call', (call) => {
        call.answer(this.localStream); // Répondre à l'appel avec le flux local
        call.on('stream', (stream) => {
          this.remoteStream = stream; // Récupérer le flux vidéo du pair distant
        });
      });
    } catch (error) {
      console.error('Erreur lors de la jonction à l\'appel :', error);
    }
  }

  // Autres méthodes de la classe...
}
