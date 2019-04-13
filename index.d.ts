type JSONValue = {
    [x: string]: null | boolean | number | string | JSONValue | (null | boolean | number | string | JSONValue)[]
}

const package: JSONValue

export = package
