<!doctype html>
@extends('layout')
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Laravel React application</title>
        <link href="{{mix('css/app.css')}}" rel="stylesheet" type="text/css">
    </head>
    <body>
	@section('content')
<div>Some content here</div>
@endsection
        <div id="header"></div>
		<div id="Containt2ndpage"></div>
		<div id="Footer"></div>


        <script src="{{mix('js/app.js')}}" ></script>
    </body>
</html>


