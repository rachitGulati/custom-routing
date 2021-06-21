import Component from './Component.js';

export default class extends Component {
    constructor() {
        super();
        this.setTitle("Dashboard");
    }
    async render() {
        return `
        <div class="section">
            <h1>Awesome Dashboard Route</h1>
            <h2> Yes It will be changing </h2>
        </div>
        `
    }
}