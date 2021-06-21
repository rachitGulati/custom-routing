import Component from './Component.js';

export default class extends Component {
    constructor() {
        super();
        this.setTitle("Settings");
    }
    async render() {
        return `
        <div class="section">
            <h1>Awesome Settings Route</h1>
        </div>
        `
    }
}