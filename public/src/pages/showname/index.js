export default class ShowName {
  message = 'Hello Ahmed';
  shown = true;

  toggleShown = () => {
    this.shown = !this.shown;
  }
}
