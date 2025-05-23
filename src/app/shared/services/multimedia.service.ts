import { EventEmitter, Injectable } from '@angular/core';
import { TrackModel } from '@app/core/models/track.model';
import e from 'express';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {

  callback: EventEmitter<any> = new EventEmitter<any>();

  public trackInfo$: BehaviorSubject<any> = new BehaviorSubject(undefined)
  public timeElapsed$: BehaviorSubject<string> = new BehaviorSubject('00:00')
  public timeRemaining$: BehaviorSubject<string> = new BehaviorSubject('-00:00')
  public playerStatus$: BehaviorSubject<string> = new BehaviorSubject('paused')
  public state$: BehaviorSubject<'paused' | 'playing'> = new BehaviorSubject<'paused' | 'playing'>('paused')
  public audio: HTMLAudioElement

  constructor() {
    this.audio = new Audio()
    this.trackInfo$.subscribe(
      (responseOk) => {
        if(responseOk) {
          this.setAudio(responseOk)
        }
      }
    )
    this.listenAllEvents()
  }

  private listenAllEvents() {
    this.audio.addEventListener('timeupdate', this.calculateTime)
    this.audio.addEventListener('playing', this.setPlayerStatus)
    this.audio.addEventListener('play', this.setPlayerStatus)
    this.audio.addEventListener('pause', this.setPlayerStatus)
    this.audio.addEventListener('ended', this.setPlayerStatus)
  }

  
  private setPlayerStatus = (state: any) => {
    switch (state.type) {
      case 'play':
        this.playerStatus$.next('play')
        this.state$.next('playing')
        break
      case 'playing':
        this.playerStatus$.next('playing')
        this.state$.next('playing')
        break
      case 'pause':
        this.playerStatus$.next('paused')
        this.state$.next('paused')
        break
      case 'ended':
        this.playerStatus$.next('ended')
        this.state$.next('paused')
        break  
      default:
        this.playerStatus$.next('paused')
        this.state$.next('paused')
        break
    }
  }

  private calculateTime = () => {
    const{ duration, currentTime } = this.audio
    this.setTimeElapsed(currentTime)
    this.setRemaining(currentTime, duration)
  }

  private setTimeElapsed(currentTime: number) {
    let seconds = Math.floor(currentTime % 60)
    let minutes = Math.floor((currentTime / 60) % 60)

    const displaySeconds = seconds < 10 ? `0${seconds}` : seconds
    const displayMinutes = minutes < 10 ? `0${minutes}` : minutes
    const displayFormat = `${displayMinutes}:${displaySeconds}`
    this.timeElapsed$.next(displayFormat)
  }

  private setRemaining(currentTime: number, duration: number) {
    let timeLeft = duration - currentTime
    let seconds = Math.floor(timeLeft % 60)
    let minutes = Math.floor((timeLeft / 60) % 60)

    const displaySeconds = seconds < 10 ? `0${seconds}` : seconds
    const displayMinutes = minutes < 10 ? `0${minutes}` : minutes
    const displayFormat = `${displayMinutes}:${displaySeconds}`
    this.timeRemaining$.next(displayFormat)
  }

  public setAudio(track: TrackModel) {
    this.audio.src = track.url
    this.audio.play()
  }

  public togglePlayer() {
    if(this.audio.paused) {
      this.state$.next('playing')
      this.audio.play()      
    } else {
      this.state$.next('paused')
      this.audio.pause()      
    }
    
  }
}
