package com.example.usuario.huerto2;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.ListView;

import java.util.ArrayList;

public class MainActivity extends AppCompatActivity {

    ListView listView;
    ArrayList<Hortaliza> lista = new ArrayList<Hortaliza>();


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        getVistas();

    }

    private void getVistas() {
        listView = (ListView) findViewById(R.id.listView);
        lista.add(new Hortaliza("Patatas", "Fritas están muy ricas.", R.drawable.patata));
        lista.add(new Hortaliza("Cebollas", "Las cebollas hacen llorar.", R.drawable.cebolla));
        lista.add(new Hortaliza("Tomates", "Los tomates son de color rojo.", R.drawable.tomate));
        lista.add(new Hortaliza("Zanahorias", "Las zanahorias son naranjas.", R.drawable.zanahoria));

        listView.setAdapter(new Adaptador(this,lista));
    }
}

