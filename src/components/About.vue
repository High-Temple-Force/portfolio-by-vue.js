<template>
    <div class="mainview">
        <div class="concept">
            <p id="concept">About</p> 
        </div>
        <div class="content">
            <table align="left">
                <tbody>
                    <tr>
                        <th>Name</th>
                        <td>Moby</td>
                    </tr>
                    <tr>
                        <th>University</th>
                        <td>Nagoya City University</td>
                    </tr>
                    <tr>
                        <th>Birthday</th>
                        <td>1993/10/24</td>
                    </tr>
                    <tr>
                        <th>Github</th>
                        <td><a href="https://github.com/bluesDD" target="_blank">Moby</a></td>
                        <td><a href="https://github.com/High-Temple-Force" target="_blank">High-Temple-Force</a></td>
                    </tr>
                    <tr>
                        <th>Qiita</th>
                        <td><a href="https://qiita.com/bluesDD" target="_blank">Moby</a></td>
                    </tr>
                    <tr>
                        <th>Mail</th>
                        <td>dd11blues[at]gmail.com</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<style>
    .mainview{
        flex:1;
        height: 100%;
    }
    .content {
        margin-bottom: 40px;
        background-color: rgb(247, 214, 219);
        height: 100%;
    }
    .contents p {
        padding: 40px;
    }
    tr {
        text-align: left;
    }
    .tbody {
	@include box-shadow;
	width: 800px;
	border-radius: 50px;
	margin: 20px auto;

    }
    table {
    padding: 50px 0;
    padding-left: 40px;
    align-self: left; 
    }
    th {
    padding-right: 20px;
    font-weight: normal;
    text-align: left;
    }
    td {
    font-size: 20px;
    padding: 5px 0px;
    text-align: left;
    }
    a {
    text-decoration: none;
    }
</style>
