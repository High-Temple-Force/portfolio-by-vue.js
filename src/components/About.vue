<template>
    <div class="mainview">
        <div class="concept">
            <p id="concept">About</p> 
        </div>
        <div class="content">
            <div class="singlebox">
                <table align="left">
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <td>Mori Hayato</td>
                        </tr>
                        <tr>
                            <th>University</th>
                            <td>Nagoya City University </td>
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
    </div>
</template>

<style>
    .mainview{
        flex:1;
        height: 100%;
    }
    .content {
        margin-bottom: 40px;
        height: 100%;
    }
    tr {
        text-align: left;
    }
    .tbody {
        width: 100%;
        border-radius: 50px;
        margin: 20px auto;

    }
    table {
        padding: 50px ;
        padding-left: 40px;
        align-self: left; 
        width: 100%;
    }
    th {
        padding-right: 20px;
        padding-left: 20px;
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
