import Component from './Component.js';

export default class extends Component {
    constructor() {
        super();
        this.setTitle("Posts");
    }
    async render() {
        return `
        <div class="section">
            <h1>Awesome Posts Route</h1>
            <h2> Yes It will be changing </h2>
            <a href="/moreposts" data-link>More Posts</a>
        </div>
        `
    }
}