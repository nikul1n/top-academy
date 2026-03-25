const factText = document.querySelector(".text");
const url = "http:\\127.0.0.1:5000\Program Program\top-academy\HTML\fetch\dogs.py";
console.log(await(await fetch(url)).json());

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const obj = { a: 1 }

async function test(number) {
  await sleep(500);
  if (number === 3) return obj
  return null
}

const promise = test(3);
promise.then((value) => console.log(value))

async function main() {
  console.log((await test(5 - 2)).a)
}
main();
console.log(66);

async def main():
    task1 = asyncio.create_task(
        say_after(1, 'hello'))

    task2 = asyncio.create_task(
        say_after(2, 'world'))

    print(f"started at {time.strftime('%X')}")

    # Wait until both tasks are completed (should take
    # around 2 seconds.)
    await task1
    await task2

    print(f"finished at {time.strftime('%X')}")