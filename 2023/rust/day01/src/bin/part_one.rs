use std::env;

fn main() {
    let args: Vec<String> = env::args().collect();
    let (query, file_path) = parse_args(args);

    println!("query {} - file_path {}", query, file_path);
}

fn parse_args(args: Vec<String>) -> (&str, &str) {
    let query = &args[1];
    let file_path = &args[2];

    (query, file_path)
}
