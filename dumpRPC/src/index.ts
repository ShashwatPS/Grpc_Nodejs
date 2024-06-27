import { getTodos } from "./rpc";


async function main() {
    try {
        const todos = await getTodos();
        console.log(todos);
    } catch (error) {
        console.error('Error fetching todos:', error);
    }
}

main();