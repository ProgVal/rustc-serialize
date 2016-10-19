var searchIndex = {};
searchIndex["rustc_serialize"] = {"doc":"Support code for encoding and decoding types.","items":[[0,"base64","rustc_serialize","Base64 binary-to-text encoding",null,null],[3,"Config","rustc_serialize::base64","Contains configuration parameters for `to_base64`.",null,null],[12,"char_set","","Character set to use",0,null],[12,"newline","","Newline to use",0,null],[12,"pad","","True to pad output with `=` characters",0,null],[12,"line_length","","`Some(len)` to wrap lines at `len`, `None` to disable line wrapping",0,null],[4,"CharacterSet","","Available encoding character sets",null,null],[13,"Standard","","The standard character set (uses `+` and `/`)",1,null],[13,"UrlSafe","","The URL safe character set (uses `-` and `_`)",1,null],[4,"Newline","","Available newline types",null,null],[13,"LF","","A linefeed (i.e. Unix-style newline)",2,null],[13,"CRLF","","A carriage return and a linefeed (i.e. Windows-style newline)",2,null],[4,"FromBase64Error","","Errors that can occur when decoding a base64 encoded string",null,null],[13,"InvalidBase64Byte","","The input contained a character not part of the base64 format",3,null],[13,"InvalidBase64Length","","The input had an invalid length",3,null],[7,"STANDARD","","Configuration for RFC 4648 standard base64 encoding",null,null],[7,"URL_SAFE","","Configuration for RFC 4648 base64url encoding",null,null],[7,"MIME","","Configuration for RFC 2045 MIME base64 encoding",null,null],[8,"ToBase64","","A trait for converting a value to base64 encoding.",null,null],[10,"to_base64","","Converts the value of `self` to a base64 value following the specified\nformat configuration, returning the owned string.",4,null],[8,"FromBase64","","A trait for converting from base64 encoded values.",null,null],[10,"from_base64","","Converts the value of `self`, interpreted as base64 encoded data, into\nan owned vector of bytes, returning the vector.",5,null],[11,"clone","","",1,null],[11,"fmt","","",1,null],[11,"clone","","",2,null],[11,"fmt","","",2,null],[11,"clone","","",0,null],[11,"fmt","","",0,null],[11,"clone","","",3,null],[11,"fmt","","",3,null],[11,"description","","",3,null],[11,"fmt","","",3,null],[0,"hex","rustc_serialize","Hex binary-to-text encoding",null,null],[4,"FromHexError","rustc_serialize::hex","Errors that can occur when decoding a hex encoded string",null,null],[13,"InvalidHexCharacter","","The input contained a character not part of the hex format",6,null],[13,"InvalidHexLength","","The input had an invalid length",6,null],[8,"ToHex","","A trait for converting a value to hexadecimal encoding",null,null],[10,"to_hex","","Converts the value of `self` to a hex value, returning the owned\nstring.",7,null],[8,"FromHex","","A trait for converting hexadecimal encoded values",null,null],[10,"from_hex","","Converts the value of `self`, interpreted as hexadecimal encoded data,\ninto an owned vector of bytes, returning the vector.",8,null],[11,"clone","","",6,null],[11,"fmt","","",6,null],[11,"description","","",6,null],[11,"fmt","","",6,null],[0,"json","rustc_serialize","JSON parsing and serialization",null,null],[3,"PrettyJson","rustc_serialize::json","",null,null],[3,"AsJson","","",null,null],[3,"AsPrettyJson","","",null,null],[3,"Encoder","","A structure for implementing serialization to JSON.",null,null],[3,"Stack","","A Stack represents the current position of the parser in the logical\nstructure of the JSON stream.\nFor example foo.bar[3].x",null,null],[3,"Parser","","A streaming JSON parser implemented as an iterator of JsonEvent, consuming\nan iterator of char.",null,null],[3,"Builder","","A Builder consumes a json::Parser to create a generic Json structure.",null,null],[3,"Decoder","","A structure to decode JSON to values in rust.",null,null],[4,"Json","","Represents a json value",null,null],[13,"I64","","",9,null],[13,"U64","","",9,null],[13,"F64","","",9,null],[13,"String","","",9,null],[13,"Boolean","","",9,null],[13,"Array","","",9,null],[13,"Object","","",9,null],[13,"Null","","",9,null],[4,"ErrorCode","","The errors that can arise while parsing a JSON stream.",null,null],[13,"InvalidSyntax","","",10,null],[13,"InvalidNumber","","",10,null],[13,"EOFWhileParsingObject","","",10,null],[13,"EOFWhileParsingArray","","",10,null],[13,"EOFWhileParsingValue","","",10,null],[13,"EOFWhileParsingString","","",10,null],[13,"KeyMustBeAString","","",10,null],[13,"ExpectedColon","","",10,null],[13,"TrailingCharacters","","",10,null],[13,"TrailingComma","","",10,null],[13,"InvalidEscape","","",10,null],[13,"InvalidUnicodeCodePoint","","",10,null],[13,"LoneLeadingSurrogateInHexEscape","","",10,null],[13,"UnexpectedEndOfHexEscape","","",10,null],[13,"UnrecognizedHex","","",10,null],[13,"NotFourDigit","","",10,null],[13,"ControlCharacterInString","","",10,null],[13,"NotUtf8","","",10,null],[4,"ParserError","","",null,null],[13,"SyntaxError","","msg, line, col",11,null],[13,"IoError","","",11,null],[4,"DecoderError","","",null,null],[13,"ParseError","","",12,null],[13,"ExpectedError","","",12,null],[13,"MissingFieldError","","",12,null],[13,"UnknownVariantError","","",12,null],[13,"ApplicationError","","",12,null],[13,"EOF","","",12,null],[4,"EncoderError","","",null,null],[13,"FmtError","","",13,null],[13,"BadHashmapKey","","",13,null],[4,"JsonEvent","","The output of the streaming parser.",null,null],[13,"ObjectStart","","",14,null],[13,"ObjectEnd","","",14,null],[13,"ArrayStart","","",14,null],[13,"ArrayEnd","","",14,null],[13,"BooleanValue","","",14,null],[13,"I64Value","","",14,null],[13,"U64Value","","",14,null],[13,"F64Value","","",14,null],[13,"StringValue","","",14,null],[13,"NullValue","","",14,null],[13,"Error","","",14,null],[4,"StackElement","","StackElements compose a Stack.\nFor example, Key(&quot;foo&quot;), Key(&quot;bar&quot;), Index(3) and Key(&quot;x&quot;) are the\nStackElements compositing the stack that represents foo.bar[3].x",null,null],[13,"Index","","",15,null],[13,"Key","","",15,null],[5,"error_str","","Returns a readable error string for a given error code.",null,{"inputs":[{"name":"errorcode"}],"output":{"name":"str"}}],[5,"decode","","Shortcut function to decode a JSON `&amp;str` into an object",null,{"inputs":[{"name":"str"}],"output":{"name":"decoderesult"}}],[5,"encode","","Shortcut function to encode a `T` into a JSON `String`",null,{"inputs":[{"name":"t"}],"output":{"name":"encoderesult"}}],[5,"as_json","","Create an `AsJson` wrapper which can be used to print a value as JSON\non-the-fly via `write!`",null,{"inputs":[{"name":"t"}],"output":{"name":"asjson"}}],[5,"as_pretty_json","","Create an `AsPrettyJson` wrapper which can be used to print a value as JSON\non-the-fly via `write!`",null,{"inputs":[{"name":"t"}],"output":{"name":"asprettyjson"}}],[6,"Array","","",null,null],[6,"Object","","",null,null],[6,"BuilderError","","",null,null],[6,"EncodeResult","","",null,null],[6,"DecodeResult","","",null,null],[8,"ToJson","","A trait for converting values to JSON",null,null],[10,"to_json","","Converts the value of `self` to an instance of JSON",16,null],[11,"clone","","",9,null],[11,"eq","","",9,null],[11,"ne","","",9,null],[11,"partial_cmp","","",9,null],[11,"lt","","",9,null],[11,"le","","",9,null],[11,"gt","","",9,null],[11,"ge","","",9,null],[11,"fmt","","",9,null],[11,"clone","","",10,null],[11,"eq","","",10,null],[11,"fmt","","",11,null],[11,"eq","","",11,null],[11,"eq","","",12,null],[11,"ne","","",12,null],[11,"fmt","","",12,null],[11,"eq","","",13,null],[11,"ne","","",13,null],[11,"fmt","","",13,null],[11,"clone","","",13,null],[11,"fmt","","",10,null],[11,"description","","",12,null],[11,"cause","","",12,null],[11,"fmt","","",12,null],[11,"from","","",12,{"inputs":[{"name":"parsererror"}],"output":{"name":"decodererror"}}],[11,"description","","",11,null],[11,"fmt","","",11,null],[11,"from","","",11,{"inputs":[{"name":"error"}],"output":{"name":"parsererror"}}],[11,"description","","",13,null],[11,"fmt","","",13,null],[11,"from","","",13,{"inputs":[{"name":"error"}],"output":{"name":"encodererror"}}],[11,"new_pretty","","Creates a new encoder whose output will be written in human-readable\nJSON to the specified writer",17,{"inputs":[{"name":"write"}],"output":{"name":"encoder"}}],[11,"new","","Creates a new encoder whose output will be written in compact\nJSON to the specified writer",17,{"inputs":[{"name":"write"}],"output":{"name":"encoder"}}],[11,"set_indent","","Set the number of spaces to indent for each level.\nThis is safe to set during encoding.",17,null],[11,"emit_nil","","",17,null],[11,"emit_usize","","",17,null],[11,"emit_u64","","",17,null],[11,"emit_u32","","",17,null],[11,"emit_u16","","",17,null],[11,"emit_u8","","",17,null],[11,"emit_isize","","",17,null],[11,"emit_i64","","",17,null],[11,"emit_i32","","",17,null],[11,"emit_i16","","",17,null],[11,"emit_i8","","",17,null],[11,"emit_bool","","",17,null],[11,"emit_f64","","",17,null],[11,"emit_f32","","",17,null],[11,"emit_char","","",17,null],[11,"emit_str","","",17,null],[11,"emit_enum","","",17,null],[11,"emit_enum_variant","","",17,null],[11,"emit_enum_variant_arg","","",17,null],[11,"emit_enum_struct_variant","","",17,null],[11,"emit_enum_struct_variant_field","","",17,null],[11,"emit_struct","","",17,null],[11,"emit_struct_field","","",17,null],[11,"emit_tuple","","",17,null],[11,"emit_tuple_arg","","",17,null],[11,"emit_tuple_struct","","",17,null],[11,"emit_tuple_struct_arg","","",17,null],[11,"emit_option","","",17,null],[11,"emit_option_none","","",17,null],[11,"emit_option_some","","",17,null],[11,"emit_seq","","",17,null],[11,"emit_seq_elt","","",17,null],[11,"emit_map","","",17,null],[11,"emit_map_elt_key","","",17,null],[11,"emit_map_elt_val","","",17,null],[11,"encode","","",9,null],[11,"from_reader","","Decodes a json value from an `&amp;mut io::Read`",9,{"inputs":[{"name":"read"}],"output":{"name":"result"}}],[11,"from_str","","Decodes a json value from a string",9,{"inputs":[{"name":"str"}],"output":{"name":"result"}}],[11,"pretty","","Borrow this json object as a pretty object to generate a pretty\nrepresentation for it via `Display`.",9,null],[11,"find","","If the Json value is an Object, returns the value associated with the provided key.\nOtherwise, returns None.",9,null],[11,"find_path","","Attempts to get a nested Json Object for each key in `keys`.\nIf any key is found not to exist, find_path will return None.\nOtherwise, it will return the Json value associated with the final key.",9,null],[11,"search","","If the Json value is an Object, performs a depth-first search until\na value associated with the provided key is found. If no value is found\nor the Json value is not an Object, returns None.",9,null],[11,"is_object","","Returns true if the Json value is an Object. Returns false otherwise.",9,null],[11,"as_object","","If the Json value is an Object, returns a reference to the associated BTreeMap.\nReturns None otherwise.",9,null],[11,"as_object_mut","","If the Json value is an Object, returns a mutable reference to the associated BTreeMap.\nReturns None otherwise.",9,null],[11,"into_object","","If the Json value is an Object, returns the associated BTreeMap.\nReturns None otherwise.",9,null],[11,"is_array","","Returns true if the Json value is an Array. Returns false otherwise.",9,null],[11,"as_array","","If the Json value is an Array, returns a reference to the associated vector.\nReturns None otherwise.",9,null],[11,"as_array_mut","","If the Json value is an Array, returns a mutable reference to the associated vector.\nReturns None otherwise.",9,null],[11,"into_array","","If the Json value is an Array, returns the associated vector.\nReturns None otherwise.",9,null],[11,"is_string","","Returns true if the Json value is a String. Returns false otherwise.",9,null],[11,"as_string","","If the Json value is a String, returns the associated str.\nReturns None otherwise.",9,null],[11,"is_number","","Returns true if the Json value is a Number. Returns false otherwise.",9,null],[11,"is_i64","","Returns true if the Json value is a i64. Returns false otherwise.",9,null],[11,"is_u64","","Returns true if the Json value is a u64. Returns false otherwise.",9,null],[11,"is_f64","","Returns true if the Json value is a f64. Returns false otherwise.",9,null],[11,"as_i64","","If the Json value is a number, return or cast it to a i64.\nReturns None otherwise.",9,null],[11,"as_u64","","If the Json value is a number, return or cast it to a u64.\nReturns None otherwise.",9,null],[11,"as_f64","","If the Json value is a number, return or cast it to a f64.\nReturns None otherwise.",9,null],[11,"is_boolean","","Returns true if the Json value is a Boolean. Returns false otherwise.",9,null],[11,"as_boolean","","If the Json value is a Boolean, returns the associated bool.\nReturns None otherwise.",9,null],[11,"is_null","","Returns true if the Json value is a Null. Returns false otherwise.",9,null],[11,"as_null","","If the Json value is a Null, returns ().\nReturns None otherwise.",9,null],[11,"index","","",9,null],[11,"index","","",9,null],[11,"eq","","",14,null],[11,"ne","","",14,null],[11,"fmt","","",14,null],[11,"eq","","",15,null],[11,"ne","","",15,null],[11,"clone","","",15,null],[11,"fmt","","",15,null],[11,"new","","",18,{"inputs":[],"output":{"name":"stack"}}],[11,"len","","Returns The number of elements in the Stack.",18,null],[11,"is_empty","","Returns true if the stack is empty.",18,null],[11,"get","","Provides access to the StackElement at a given index.\nlower indices are at the bottom of the stack while higher indices are\nat the top.",18,null],[11,"is_equal_to","","Compares this stack with an array of StackElements.",18,null],[11,"starts_with","","Returns true if the bottom-most elements of this stack are the same as\nthe ones passed as parameter.",18,null],[11,"ends_with","","Returns true if the top-most elements of this stack are the same as\nthe ones passed as parameter.",18,null],[11,"top","","Returns the top-most element (if any).",18,null],[11,"next","","",19,null],[11,"new","","Creates the JSON parser.",19,{"inputs":[{"name":"t"}],"output":{"name":"parser"}}],[11,"stack","","Provides access to the current position in the logical structure of the\nJSON stream.",19,null],[11,"new","","Create a JSON Builder.",20,{"inputs":[{"name":"t"}],"output":{"name":"builder"}}],[11,"build","","",20,null],[11,"new","","Creates a new decoder instance for decoding the specified JSON value.",21,{"inputs":[{"name":"json"}],"output":{"name":"decoder"}}],[11,"read_nil","","",21,null],[11,"read_usize","","",21,null],[11,"read_u8","","",21,null],[11,"read_u16","","",21,null],[11,"read_u32","","",21,null],[11,"read_u64","","",21,null],[11,"read_isize","","",21,null],[11,"read_i8","","",21,null],[11,"read_i16","","",21,null],[11,"read_i32","","",21,null],[11,"read_i64","","",21,null],[11,"read_f32","","",21,null],[11,"read_f64","","",21,null],[11,"read_bool","","",21,null],[11,"read_char","","",21,null],[11,"read_str","","",21,null],[11,"read_enum","","",21,null],[11,"read_enum_variant","","",21,null],[11,"read_enum_variant_arg","","",21,null],[11,"read_enum_struct_variant","","",21,null],[11,"read_enum_struct_variant_field","","",21,null],[11,"read_struct","","",21,null],[11,"read_struct_field","","",21,null],[11,"read_tuple","","",21,null],[11,"read_tuple_arg","","",21,null],[11,"read_tuple_struct","","",21,null],[11,"read_tuple_struct_arg","","",21,null],[11,"read_option","","",21,null],[11,"read_seq","","",21,null],[11,"read_seq_elt","","",21,null],[11,"read_map","","",21,null],[11,"read_map_elt_key","","",21,null],[11,"read_map_elt_val","","",21,null],[11,"error","","",21,null],[11,"to_json","","",9,null],[11,"fmt","","Encodes a json value into a string",9,null],[11,"fmt","","Encodes a json value into a string",22,null],[11,"fmt","","Encodes a json value into a string",23,null],[11,"indent","","Set the indentation level for the emitted JSON",24,null],[11,"fmt","","Encodes a json value into a string",24,null],[11,"from_str","","",9,{"inputs":[{"name":"str"}],"output":{"name":"result"}}],[8,"Decoder","rustc_serialize","Trait for reading in an encoding for deserialization.",null,null],[16,"Error","","The error type for method results.",25,null],[10,"read_nil","","Read a nil value.",25,null],[10,"read_usize","","Read a usize value.",25,null],[10,"read_u64","","Read a u64 value.",25,null],[10,"read_u32","","Read a u32 value.",25,null],[10,"read_u16","","Read a u16 value.",25,null],[10,"read_u8","","Read a u8 value.",25,null],[10,"read_isize","","Read a isize value.",25,null],[10,"read_i64","","Read a i64 value.",25,null],[10,"read_i32","","Read a i32 value.",25,null],[10,"read_i16","","Read a i16 value.",25,null],[10,"read_i8","","Read a i8 value.",25,null],[10,"read_bool","","Read a bool value.",25,null],[10,"read_f64","","Read a f64 value.",25,null],[10,"read_f32","","Read a f32 value.",25,null],[10,"read_char","","Read a char value.",25,null],[10,"read_str","","Read a string value.",25,null],[10,"read_enum","","Read an enumeration value.",25,null],[10,"read_enum_variant","","Read an enumeration value.",25,null],[10,"read_enum_variant_arg","","Read an unnamed data item for an enumeration variant.",25,null],[10,"read_enum_struct_variant","","Read an enumeration value.",25,null],[10,"read_enum_struct_variant_field","","Read a named data item for an enumeration variant.",25,null],[10,"read_struct","","Read an struct value.",25,null],[10,"read_struct_field","","Read a field for a struct value.",25,null],[10,"read_tuple","","Read a tuple value.",25,null],[10,"read_tuple_arg","","Read a data item for a tuple.",25,null],[10,"read_tuple_struct","","Read a tuple struct value.",25,null],[10,"read_tuple_struct_arg","","Read a data item for a tuple struct.",25,null],[10,"read_option","","Read an optional value.",25,null],[10,"read_seq","","Read a sequence of values.",25,null],[10,"read_seq_elt","","Read an element in the sequence.",25,null],[10,"read_map","","Read an associative container (map).",25,null],[10,"read_map_elt_key","","Read the key for an entry in a map.",25,null],[10,"read_map_elt_val","","Read the value for an entry in a map.",25,null],[10,"error","","Record a decoding error.",25,null],[8,"Encoder","","Trait for writing out an encoding when serializing.",null,null],[16,"Error","","The error type for method results.",26,null],[10,"emit_nil","","Emit a nil value.",26,null],[10,"emit_usize","","Emit a usize value.",26,null],[10,"emit_u64","","Emit a u64 value.",26,null],[10,"emit_u32","","Emit a u32 value.",26,null],[10,"emit_u16","","Emit a u16 value.",26,null],[10,"emit_u8","","Emit a u8 value.",26,null],[10,"emit_isize","","Emit a isize value.",26,null],[10,"emit_i64","","Emit a i64 value.",26,null],[10,"emit_i32","","Emit a i32 value.",26,null],[10,"emit_i16","","Emit a i16 value.",26,null],[10,"emit_i8","","Emit a i8 value.",26,null],[10,"emit_bool","","Emit a bool value.",26,null],[10,"emit_f64","","Emit a f64 value.",26,null],[10,"emit_f32","","Emit a f32 value.",26,null],[10,"emit_char","","Emit a char value.",26,null],[10,"emit_str","","Emit a string value.",26,null],[10,"emit_enum","","Emit an enumeration value.",26,null],[10,"emit_enum_variant","","Emit a enumeration variant value with no or unnamed data.",26,null],[10,"emit_enum_variant_arg","","Emit an unnamed data item for an enumeration variant.",26,null],[10,"emit_enum_struct_variant","","Emit a enumeration variant value with no or named data.",26,null],[10,"emit_enum_struct_variant_field","","Emit a named data item for an enumeration variant.",26,null],[10,"emit_struct","","Emit a struct value.",26,null],[10,"emit_struct_field","","Emit a field item for a struct.",26,null],[10,"emit_tuple","","Emit a tuple value.",26,null],[10,"emit_tuple_arg","","Emit a data item for a tuple.",26,null],[10,"emit_tuple_struct","","Emit a tuple struct value.",26,null],[10,"emit_tuple_struct_arg","","Emit a data item for a tuple struct.",26,null],[10,"emit_option","","Emit an optional value.",26,null],[10,"emit_option_none","","Emit the `None` optional value.",26,null],[10,"emit_option_some","","Emit the `Some(x)` optional value.",26,null],[10,"emit_seq","","Emit a sequence of values.",26,null],[10,"emit_seq_elt","","Emit an element in a sequence.",26,null],[10,"emit_map","","Emit an associative container (map).",26,null],[10,"emit_map_elt_key","","Emit the key for an entry in a map.",26,null],[10,"emit_map_elt_val","","Emit the value for an entry in a map.",26,null],[8,"Decodable","","Trait for deserializing a type.",null,null],[10,"decode","","Deserialize a value using a `Decoder`.",27,{"inputs":[{"name":"d"}],"output":{"name":"result"}}],[8,"Encodable","","Trait for serializing a type.",null,null],[10,"encode","","Serialize a value using an `Encoder`.",28,null],[8,"DecoderHelpers","","Trait with helper functions for implementing `Decodable`.",null,null],[10,"read_to_vec","","Read a sequence into a vector.",29,null],[8,"EncoderHelpers","","Trait with helper functions for implementing `Encodable`.",null,null],[10,"emit_from_vec","","Emit a vector as a sequence.",30,null]],"paths":[[3,"Config"],[4,"CharacterSet"],[4,"Newline"],[4,"FromBase64Error"],[8,"ToBase64"],[8,"FromBase64"],[4,"FromHexError"],[8,"ToHex"],[8,"FromHex"],[4,"Json"],[4,"ErrorCode"],[4,"ParserError"],[4,"DecoderError"],[4,"EncoderError"],[4,"JsonEvent"],[4,"StackElement"],[8,"ToJson"],[3,"Encoder"],[3,"Stack"],[3,"Parser"],[3,"Builder"],[3,"Decoder"],[3,"PrettyJson"],[3,"AsJson"],[3,"AsPrettyJson"],[8,"Decoder"],[8,"Encoder"],[8,"Decodable"],[8,"Encodable"],[8,"DecoderHelpers"],[8,"EncoderHelpers"]]};
initSearch(searchIndex);
