<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;


class Comment extends Model
{
    use HasFactory;
    protected $fillable = [
        'transmitter',
        'receiver',
        'rating',
        'content',
        'date'
    ];
    protected $guarded = [
        'id',
        'created_at',
        'updated_at'
    ];
    protected $primaryKey = 'id';

    public function getRouteKeyName()
    {
        return 'id';
    }
    public function user(){
        return $this->belongsTo(User::class);
    }

}
